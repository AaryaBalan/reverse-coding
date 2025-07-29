import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Question from '../components/Question';
import CodeEditor from '../components/CodeEditor';
import Timer from '../components/Timer';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
    // Add confirmation dialog for page refresh/close and prevent refresh shortcuts
    // useEffect(() => {
    //     const handleBeforeUnload = (e) => {
    //         e.preventDefault();
    //         alert('Page refresh is disabled to protect your progress!');
    //         return false;
    //     };

    //     const handleKeyDown = (e) => {
    //         // Prevent F5 refresh
    //         if (e.key === 'F5') {
    //             e.preventDefault();
    //             alert('Page refresh is disabled to protect your progress!');
    //             return false;
    //         }

    //         // Prevent Ctrl+R refresh
    //         if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
    //             e.preventDefault();
    //             alert('Page refresh is disabled to protect your progress!');
    //             return false;
    //         }

    //         // Prevent Ctrl+Shift+R hard refresh
    //         if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'R') {
    //             e.preventDefault();
    //             alert('Page refresh is disabled to protect your progress!');
    //             return false;
    //         }
    //     };

    //     const handleContextMenu = (e) => {
    //         e.preventDefault(); // Prevent right-click context menu which could have refresh option
    //     };

    //     window.addEventListener('beforeunload', handleBeforeUnload);
    //     document.addEventListener('keydown', handleKeyDown);
    //     document.addEventListener('contextmenu', handleContextMenu);

    //     return () => {
    //         window.removeEventListener('beforeunload', handleBeforeUnload);
    //         document.removeEventListener('keydown', handleKeyDown);
    //         document.removeEventListener('contextmenu', handleContextMenu);
    //     };
    // }, []); 
    const { level } = useParams()
    const [inputs, setInputs] = React.useState([0]);
    const [time, setTime] = React.useState(0);

    useEffect(() => {
        // Set input based on level
        if (level === 'easy') {
            setInputs(
                Array.from({ length: 5 }, () => Math.floor(Math.random() * 1000) + 1)
            ); // Random input for easy level
        } else if (level === 'medium') {
            setInputs(
                Array.from({ length: 5 }, () => Math.floor(Math.random() * 100) + 1)
            ); // Random input for medium level
        } else if (level === 'hard') {
            setInputs(
                Array.from({ length: 5 }, () => Math.floor(Math.random() * 1000) + 1)
            ); // Random input for hard level
        }
    }, [level]);

    return (
        <div className="relative bg-[#131324] text-white h-screen w-full overflow-hidden z-50">

            <div className="relative z-10 flex flex-col h-full">
                <Navbar />
                <div className='flex w-full justify-between items-center px-6 py-4'>
                    <Timer setTime={setTime} time={time} start={true} onComplete={() => alert('Time is up!')} />
                </div>
                <div className="flex-1 flex px-6 py-4 gap-4 overflow-hidden">
                    <Question level={level} />
                    <CodeEditor time={time} level={level} inputs={inputs} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
