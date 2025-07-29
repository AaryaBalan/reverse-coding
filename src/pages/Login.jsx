import React, { useEffect, useState } from 'react';
import SplitText from '../components/animations/split-text';
import LetterGlitch from '../components/animations/letterGlitch';
import { Link } from 'react-router-dom';

const Login = () => {
   const [time, setTime] = useState(new Date());

   useEffect(() => {
      const interval = setInterval(() => setTime(new Date()), 1000);
      return () => clearInterval(interval);
   }, []); const secDeg = time.getSeconds() * 6;
   const minDeg = time.getMinutes() * 6 + time.getSeconds() * 0.1;
   const hourDeg = ((time.getHours() % 12) / 12) * 360 + (time.getMinutes() / 60) * 30;

   return (
      <div style={{ width: '100%', height: '100vh', position: 'relative', background: 'black' }}>
         <LetterGlitch glitchSpeed={50} centerVignette={true} outerVignette={false} smooth={true} />

         {/* Center Modal */}
         <div
            style={{
               position: 'absolute',
               top: '50%',
               left: '50%',
               transform: 'translate(-50%, -50%)',
               width: '100%',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               zIndex: 2,
            }}
         >
            <div className="w-full  max-w-md px-4">
               <div
                  className="relative backdrop-blur-sm rounded-lg px-8 py-20 border-2 border-dashed border-[#00d3f3] flex flex-col items-center overflow-hidden"
                  style={{
                     backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  }}
               >
                  {/* SVG Clock Background in Modal */}
                  <svg
                     viewBox="0 0 200 200"
                     style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%) scale(1.5)',
                        opacity: 0.25,
                        zIndex: 0,
                     }}
                  >
                     <circle cx="100" cy="100" r="95" stroke="#00d3f3" strokeWidth="3" fill="none" />
                     {[...Array(12)].map((_, i) => (
                        <line
                           key={i}
                           x1={100 + 85 * Math.sin((i * 30 * Math.PI) / 180)}
                           y1={100 - 85 * Math.cos((i * 30 * Math.PI) / 180)}
                           x2={100 + 90 * Math.sin((i * 30 * Math.PI) / 180)}
                           y2={100 - 90 * Math.cos((i * 30 * Math.PI) / 180)}
                           stroke="#00d3f3"
                           strokeWidth="2"
                        />
                     ))}
                     <line
                        x1="100"
                        y1="100"
                        x2={100 + 40 * Math.sin((hourDeg * Math.PI) / 180)}
                        y2={100 - 40 * Math.cos((hourDeg * Math.PI) / 180)}
                        stroke="#00d3f3"
                        strokeWidth="4"
                     />
                     <line
                        x1="100"
                        y1="100"
                        x2={100 + 60 * Math.sin((minDeg * Math.PI) / 180)}
                        y2={100 - 60 * Math.cos((minDeg * Math.PI) / 180)}
                        stroke="#00d3f3"
                        strokeWidth="3"
                     />
                     <line
                        x1="100"
                        y1="100"
                        x2={100 + 70 * Math.sin((secDeg * Math.PI) / 180)}
                        y2={100 - 70 * Math.cos((secDeg * Math.PI) / 180)}
                        stroke="red"
                        strokeWidth="1"
                     />
                  </svg>

                  {/* Modal Content */}
                  <div className="relative z-10 w-full flex flex-col items-center">
                     <p className="text-5xl font-extrabold text-center text-[#00d3f3] mb-2">
                        Tech Fiesta 2025
                     </p>
                     <p className="text-3xl font-bold text-center text-[#00d3f3] mb-6">
                        Reverse Coding
                     </p>
                     <Link
                        to="/code/easy"
                        className="bg-[#00d3f3] px-6 py-2 rounded text-[#131324] font-bold text-lg cursor-pointer hover:bg-[#00b3d3] transition-colors duration-300"
                     >
                        Start
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
