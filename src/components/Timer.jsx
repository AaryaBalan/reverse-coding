import React, { useState, useEffect } from 'react';

const Timer = ({ setTime, time }) => {

    useEffect(() => {
        // Get saved timer data from localStorage
        const savedStartTime = localStorage.getItem('timerStartTime');
        const now = Date.now();

        if (savedStartTime) {
            // Calculate elapsed time since the timer started
            const elapsedSeconds = Math.floor((now - parseInt(savedStartTime)) / 1000);
            setTime(elapsedSeconds);
        } else {
            // First time starting the timer, save the start time
            localStorage.setItem('timerStartTime', now.toString());
            setTime(0);
        }

        const interval = setInterval(() => {
            const currentStartTime = localStorage.getItem('timerStartTime');
            if (currentStartTime) {
                const elapsedSeconds = Math.floor((Date.now() - parseInt(currentStartTime)) / 1000);
                setTime(elapsedSeconds);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures this runs only once on mount

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');

        if (hours > 0) {
            return `${hours}:${mins}:${secs}`;
        } else {
            return `${mins}:${secs}`;
        }
    };

    return (
        <div className="w-screen flex items-center justify-center">
            <div className="w-fit text-white p-4 rounded flex items-center gap-3 border border-cyan-400 shadow-lg">
                <span className="text-cyan-300 font-mono text-2xl">{formatTime(time)}</span>
            </div>
        </div>
    );
};

export default Timer;
