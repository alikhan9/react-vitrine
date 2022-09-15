import React from 'react'
import Typed from 'react-typed';


const Hero = () => {
    return (
        <div className='text-white flex flex-col md:max-w-[800px] w-full flex-wrap h-[91vh]  text-center justify-center content-center  mx-auto'>
            <p className='text-[#00df90] font-bold'>
                GROWING WITH DATA ANALYTICS
            </p>
            <h1 className='md:text-7xl sm:text-5xl text-3xl md:py-6'>
                Grow with Data
            </h1>
            <div className='md:flex mx-auto'>
                <p className='pr-2 md:text-5xl sm:text-5xl text-3xl font-bold'>
                    Fast, flexible finacing for
                </p>
                <Typed
                    className='md:text-5xl sm:text-5xl text-3xl font-bold pl-1'
                    strings={['BTB', 'BTC', 'SASS']}
                    typeSpeed={150}
                    backSpeed={140}
                    loop
                />
            </div>

            <p className='text-gray-500 pt-4 pb-4 font-bold md:text-2xl text-xl'>
                Monitor your data analytics to increase revenue
                for BTB, BTC & SASS platforms.
            </p>
            <button className='hover:scale-105 duration-300 hover:text-[hsl(159,100%,44%)] hover:bg-gray-800  text-2xl px-6 py-3 w-[200px]  bg-[#00df90] font-medium rounded-md self-center text-black'>Get Started</button>
        </div>
    )
}

export default Hero