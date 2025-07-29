import React, { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { githubDark } from '@uiw/codemirror-theme-github';
import axios from 'axios';
import { easyFunction, hardFunction, mediumFunction } from './answers';
import { formatTime } from './formatTime';

const languageExtensions = {
    python: python(),
    cpp: cpp(),
    java: java(),
    javascript: javascript(),
};

const supportedLanguages = {
    python: "Python",
    cpp: "Cpp",
    java: "Java",
    javascript: "JavaScript",
};

const CodeEditor = ({ inputs, level, time }) => {
    const [language, setLanguage] = useState('python');
    const [isExecuting, setIsExecuting] = useState(false);
    const [editorCode, setEditorCode] = useState('');
    const [outputResults, setOutputResults] = useState([]);
    const editorRef = useRef(null);
    const [method, setMethod] = useState(() => easyFunction);
    const [error, setError] = useState('');

    useEffect(() => {
        if (level === 'easy') setMethod(() => easyFunction);
        else if (level === 'medium') setMethod(() => mediumFunction);
        else if (level === 'hard') setMethod(() => hardFunction);
    }, [level]);

    const executeCode = async (code, language, input) => {
        const languageMap = {
            python: "python",
            cpp: "cpp",
            java: "java",
            javascript: "javascript",
        };

        const apiLanguage = languageMap[language] || language;

        let finalCode = code;
        if (input !== undefined) {
            if (apiLanguage === "python") {
                finalCode = `n = ${input}\n${code}`;
            } else if (apiLanguage === "cpp") {
                finalCode = `int n = ${input};\n${code}`;
            } else if (apiLanguage === "java") {
                finalCode = `int n = ${input};\n${code}`;
            } else if (apiLanguage === "javascript") {
                finalCode = `const n = ${input};\n${code}`;
            }
        }

        const requestBody = {
            language: apiLanguage,
            version: "*",
            files: [{ name: "main", content: finalCode }],
            stdin: "",
            args: [],
        };

        try {
            const { data } = await axios.post(
                "https://emkc.org/api/v2/piston/execute",
                requestBody,
                { headers: { "Content-Type": "application/json" } }
            );

            // setError to error
            if (!data.run.stdout.length) {
                setError(data.run.stderr);
            }else{
                setError('');
            }

            return data.run.stdout.length ? data.run.output : data.run.stderr;
        } catch (error) {
            return 'Internal error';
        }
    };

    const runTests = async () => {
        setIsExecuting(true);
        const results = [];

        console.log(editorCode, language, inputs);

        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i];
            const expected = method(input).toString().trim();
            const output = await executeCode(editorCode, language, input);
            const isCorrect = +output.trim() === +expected;
            results.push({
                input,
                expected,
                output: +output.trim(),
                isCorrect,
            });
        }

        const trueValues = results.filter(res => res.isCorrect);
        if (trueValues.length === 5) {
            if (!localStorage.getItem(`${level}-time`)) {
                localStorage.setItem(`${level}-time`, formatTime(time));
            }

            if (localStorage.getItem('easy-time') && localStorage.getItem('medium-time') && localStorage.getItem('hard-time')) {
                window.location.href = '/completed';
            }
        }

        setOutputResults(results);
        setIsExecuting(false);
    };

    useEffect(() => {
        const view = editorRef.current?.view;
        if (!view) return;

        const handleKeyDown = (e) => {
            const key = e.key;

            if ((key.length === 1 && key.match(/[\x20-\x7E]/)) || key === 'Backspace' || key === 'Enter') {
                e.preventDefault();

                const state = view.state;
                const cursorPos = state.selection.main.head;
                const line = state.doc.lineAt(cursorPos);
                const lineIndex = line.number - 1;

                const lines = editorCode.split('\n');
                let currentLine = lines[lineIndex] || '';

                if (key === 'Backspace') {
                    currentLine = currentLine.slice(1);
                } else if (key === 'Enter') {
                    lines.splice(lineIndex + 1, 0, '');
                } else {
                    currentLine = key + currentLine;
                }

                lines[lineIndex] = currentLine;
                setEditorCode(lines.join('\n'));

                if (key === 'Enter') {
                    setTimeout(() => {
                        const nextLineStartPos = lines.slice(0, lineIndex + 2).join('\n').length + 1;
                        view.dispatch({
                            selection: { anchor: nextLineStartPos },
                            scrollIntoView: true,
                        });
                    }, 0);
                }
            }
        };

        const dom = view.contentDOM;
        dom.addEventListener('keydown', handleKeyDown);
        return () => dom.removeEventListener('keydown', handleKeyDown);
    }, [editorCode]);

    return (
        <div className="w-1/2 space-y-4 flex flex-col max-h-[calc(100vh-100px)] overflow-hidden border-2 border-dashed border-[#00d3f3]">
            <div className="bg-[#131324] p-4 rounded-lg flex-1 flex flex-col overflow-hidden">
                <div className="flex justify-between items-center mb-2">
                    <div className="text-cyan-400 font-medium text-base">{'</>'} Code</div>
                    <select
                        className="bg-gray-800 text-cyan-400 p-1 rounded outline-none"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                    >
                        {Object.keys(supportedLanguages).map((lang) => (
                            <option key={lang} value={lang}>
                                {supportedLanguages[lang]}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex-1 overflow-auto rounded-md">
                    <CodeMirror
                        ref={editorRef}
                        value={editorCode}
                        onChange={(val) => setEditorCode(val)}
                        theme={githubDark}
                        extensions={
                            languageExtensions[language]
                                ? [languageExtensions[language]]
                                : []
                        }
                        basicSetup={{ lineNumbers: true }}
                        className="h-full w-full"
                    />
                </div>
            </div>

            <div className="flex justify-end mb-5 mr-5">
                <button
                    onClick={runTests}
                    disabled={isExecuting}
                    className={`bg-cyan-400 text-gray-900 px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer
                        ${isExecuting ? 'opacity-50 cursor-not-allowed' : ''}
                    `}
                >
                    <Play size={16} />
                    {isExecuting ? 'Running...' : 'Run Code'}
                </button>
            </div>

            {(error.length !== 0 && isExecuting === false) && (
                <div className="bg-[#101828] text-white mt-4 p-4 rounded-lg max-h-96 overflow-auto border border-cyan-400">
                    <pre className='text-red-400'>{error}</pre>
                </div>
            )}

            {(outputResults.length > 0 && error.length === 0 && isExecuting === false) && (
                <div className="bg-[#101828] text-white mt-4 p-4 rounded-lg max-h-96 overflow-auto border border-cyan-400">
                    {outputResults.map((res, index) => (
                        <pre key={index} className="flex flex-col gap-y-2 text-lg bg-gray-800 p-4 border border-gray-700 my-5 rounded-md">
                            <span className='text-[#05df72]'>Testcase {index + 1}</span>
                            <span>Input = {res.input}</span>
                            <span>Expected Output: {res.expected}</span>
                            <span>Actual Output: {res.output}</span>
                            <span>{res.isCorrect ? '✅ Correct Output' : '❌ Incorrect Output'}</span>
                        </pre>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CodeEditor;
