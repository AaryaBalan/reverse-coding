import React, { useRef } from 'react';
import Squares from './animations/squares';
import Galaxy from './animations/galaxy';
import Clock from './analogClock';
import AnalogClock from './analogClock';

const Question = () => {
    const containerRef = useRef();
    return (
        <div className="relative w-1/2 bg-[#101828] text-[#00d3f3] rounded overflow-auto max-h-[calc(100vh-100px)] border-[#00d3f3]">

            <AnalogClock containerRef={containerRef} />


            <div className='absolute top-0 p-4'>
                <h2 className='text-xl font-semibold mb-10'>Heading Text</h2>
                <p className='text-white'>
                    eligendi, illum nisi rem sapiente laudantium odit dolorem fugit maxime incidunt iure minima, veritatis velit, quod quis mollitia? Sint deleniti illum dicta!
                    Dicta quasi dolorum distinctio. Sunt porro amet hic laudantium eaque consequuntur, sequi nulla aspernatur! Eum reprehenderit nulla quasi, cupiditate praesentium mollitia. Quia odit tempore dicta repellat reprehenderit suscipit beatae placeat.
                    Voluptate excepturi doloremque distinctio id quibusdam autem illum tenetur libero ad repellendus, blanditiis voluptatum adipisci? Eos dicta esse sed nihil consequuntur aliquid itaque ex. Cum, ipsum possimus. Eum, nemo voluptatum!
                    Ratione illum animi illo inventore, id sapiente iste ut nihil maiores? Inventore maiores modi minima deleniti? Assumenda, atque recusandae itaque mollitia dignissimos aut? Consequuntur labore culpa sint, ex similique a!
                </p>
            </div>
        </div>
    );
};

export default Question;
