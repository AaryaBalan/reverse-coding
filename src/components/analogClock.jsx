import React, { useEffect, useState } from 'react';

const AnalogClock = ({ className = '' }) => {
    const [time, setTime] = useState(new Date());
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // Get window dimensions
    const getMaxPosition = () => {
        const clockSize = 180; // size of the clock
        const padding = 20;
        const maxX = window.innerWidth - clockSize - padding;
        const maxY = window.innerHeight - clockSize - padding;
        return {
            x: Math.floor(Math.random() * maxX),
            y: Math.floor(Math.random() * maxY),
        };
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
            setPosition(getMaxPosition());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    const secondDeg = seconds * 6;
    const minuteDeg = minutes * 6 + seconds * 0.1;
    const hourDeg = (hours % 12) * 30 + minutes * 0.5;

    return (
        <div
            className={`fixed z-0 pointer-events-none select-none opacity-30 transition-transform duration-1000 ease-in-out ${className}`}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                width: '180px',
                height: '180px',
            }}
        >
            <div className="w-full h-full rounded-full border-2 border-cyan-400 relative bg-[#0a0a0a] shadow-lg">
                {/* Hour Hand */}
                <div
                    className="absolute w-[4px] h-[45px] bg-white left-1/2 top-[35px] origin-bottom"
                    style={{ transform: `translateX(-50%) rotate(${hourDeg}deg)` }}
                />
                {/* Minute Hand */}
                <div
                    className="absolute w-[3px] h-[65px] bg-cyan-400 left-1/2 top-[10px] origin-bottom"
                    style={{ transform: `translateX(-50%) rotate(${minuteDeg}deg)` }}
                />
                {/* Second Hand */}
                <div
                    className="absolute w-[2px] h-[80px] bg-red-500 left-1/2 top-0 origin-bottom"
                    style={{ transform: `translateX(-50%) rotate(${secondDeg}deg)` }}
                />
                {/* Center Dot */}
                <div className="absolute w-3 h-3 bg-white rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
        </div>
    );
};

export default AnalogClock;
