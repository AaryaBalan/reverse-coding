import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LetterGlitch from '../components/animations/letterGlitch';

const CompletionStats = () => {
    const navigate = useNavigate();
    const easyTime = localStorage.getItem('easy-time');
    const mediumTime = localStorage.getItem('medium-time');
    const hardTime = localStorage.getItem('hard-time');
    const easyPoints = easyTime ? 20 : 0;
    const mediumPoints = mediumTime ? 30 : 0;
    const hardPoints = hardTime ? 50 : 0;
    const userPoints = easyPoints + mediumPoints + hardPoints;
    const totalPoints = 20 + 30 + 50;

    // Helper to convert time string to seconds
    function timeToSeconds(str) {
        if (!str || str === '--:--') return 0;
        const parts = str.split(':').map(Number);
        if (parts.length === 2) return parts[0] * 60 + parts[1];
        if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
        return 0;
    }
    const easySec = timeToSeconds(easyTime);
    const mediumSec = timeToSeconds(mediumTime);
    const hardSec = timeToSeconds(hardTime);
    const maxSec = Math.max(easySec, mediumSec, hardSec);
    function formatMaxTime(sec) {
        if (sec === 0) return '0s';
        const h = Math.floor(sec / 3600);
        const m = Math.floor((sec % 3600) / 60);
        const s = sec % 60;
        if (h > 0) return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        return `${m}:${s.toString().padStart(2, '0')}`;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#131324] text-white">
            <LetterGlitch glitchSpeed={50} centerVignette={true} outerVignette={false} smooth={true} />
            <Navbar />
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 2,
                }}
                className="bg-[#101828] rounded-2xl shadow-lg p-10 w-full max-w-xl border-2 border-cyan-400">
                <h1 className="text-3xl font-bold text-cyan-400 mb-6 text-center">🎉 Congratulations!</h1>
                <p className="text-lg mb-8 text-center">You completed all coding levels!</p>
                <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center bg-[#131324] p-4 rounded-lg border border-green-400">
                        <span className="font-semibold text-green-400 w-20">Easy</span>
                        <span className='w-20'>20 pts</span>
                        <span className='w-32 text-end'>Time: {easyTime || '--:--'}</span>
                    </div>
                    <div className="flex justify-between items-center bg-[#131324] p-4 rounded-lg border border-yellow-400">
                        <span className="font-semibold text-yellow-400 w-20">Medium</span>
                        <span className='w-20'>30 pts</span>
                        <span className='w-32 text-end'>Time: {mediumTime || '--:--'}</span>
                    </div>
                    <div className="flex justify-between items-center bg-[#131324] p-4 rounded-lg border border-red-400">
                        <span className="font-semibold text-red-400 w-20">Hard</span>
                        <span className='w-20'>50 pts</span>
                        <span className='w-32 text-end'>Time: {hardTime || '--:--'}</span>
                    </div>
                </div>
                <div className="text-center mb-6">
                    <span className="text-xl font-bold text-cyan-400">Your Points: {userPoints} / {totalPoints}</span>
                </div>
                <div className="text-center mb-6">
                    <span className="text-lg text-gray-300">Total Time Taken: {formatMaxTime(maxSec)}</span>
                </div>

                <button
                    className="bg-cyan-400 text-[#131324] px-6 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition cursor-pointer"
                    onClick={() => navigate('/')}
                >
                    Go to Home
                </button>
            </div>
        </div >
    );
};

export default CompletionStats;
