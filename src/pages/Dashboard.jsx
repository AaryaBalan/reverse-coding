import React from 'react';
import Navbar from '../components/Navbar';
import Question from '../components/Question';
import CodeEditor from '../components/CodeEditor';

const Dashboard = () => {
    return (
        <div className="bg-[#131324] text-white h-screen w-full flex flex-col">
            <Navbar />
            <div className="flex-1 flex px-6 py-4 pt-20 gap-4 overflow-hidden">
                <Question />
                <CodeEditor />
            </div>
        </div>
    );
};

export default Dashboard;
