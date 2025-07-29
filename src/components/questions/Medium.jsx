import React from "react";

export default function Medium() {
    return (
        <div className="bg-[#131324] p-6 md:p-10 rounded-2xl shadow-md text-white mx-auto space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold text-yellow-400">
                🧠 Problem (Medium): Find the N<sup>th</sup> Fibonacci Number
            </h1>

            <div className="space-y-2">
                <p className="text-base md:text-lg">
                    Given a number <code className="bg-gray-800 px-2 py-1 rounded text-yellow-300">n</code>, return the <strong>n<sup>th</sup></strong> Fibonacci number. The Fibonacci sequence is defined as:
                    <br />
                    <code className="bg-gray-800 px-2 py-1 rounded text-yellow-300">F(0) = 0</code>, <code className="bg-gray-800 px-2 py-1 rounded text-yellow-300">F(1) = 1</code>, and <code className="bg-gray-800 px-2 py-1 rounded text-yellow-300">F(n) = F(n-1) + F(n-2)</code> for <code>n &gt; 1</code>.
                </p>
            </div>

            <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-300">Function Signature</h2>
                <pre className="bg-gray-800 p-4 rounded text-sm text-yellow-300 overflow-auto">
                    {`function nthFibonacci(n: number): number`}
                </pre>
            </div>

            <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-300">Examples</h2>

                <div className="bg-gray-800 p-4 rounded border border-gray-700">
                    <p className="font-medium text-yellow-300">Example 1:</p>
                    <p className="text-sm">
                        <strong>Input:</strong> <code className="text-yellow-300">n = 5</code><br />
                        <strong>Output:</strong> <code className="text-yellow-300">5</code>
                    </p>
                </div>

                <div className="bg-gray-800 p-4 rounded border border-gray-700">
                    <p className="font-medium text-yellow-300">Example 2:</p>
                    <p className="text-sm">
                        <strong>Input:</strong> <code className="text-yellow-300">n = 7</code><br />
                        <strong>Output:</strong> <code className="text-yellow-300">13</code>
                    </p>
                </div>

                <div className="bg-gray-800 p-4 rounded border border-gray-700">
                    <p className="font-medium text-yellow-300">Example 3:</p>
                    <p className="text-sm">
                        <strong>Input:</strong> <code className="text-yellow-300">n = 0</code><br />
                        <strong>Output:</strong> <code className="text-yellow-300">0</code>
                    </p>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-300">Input</h2>
                <ul className="list-disc list-inside text-sm md:text-base text-gray-300 mt-2">
                    <li>You don't need to take input from the user. Use the variable <code className="text-yellow-300">n</code> which is already defined in the code.</li>
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-300">Constraints</h2>
                <ul className="list-disc list-inside text-sm md:text-base text-gray-300 mt-2">
                    <li>0 ≤ n ≤ 10⁴</li>
                </ul>
            </div>

            <div className="border-t border-gray-700 pt-4">
                <h2 className="text-xl font-semibold text-gray-300">💡 Follow-up</h2>
                <p className="text-sm md:text-base">
                    Can you implement this using O(1) space and avoid recursion?
                </p>
            </div>
        </div>
    );
}
