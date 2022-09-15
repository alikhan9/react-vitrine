import React from 'react'
import statimage from '../images/analytics.jpg'

const Analytics = () => {
    return (
        <div id='company' className='bg-white flex  text-black flex-col flex-wrap justify-center content-center  mx-auto' >
            <div className='max-w-[1240px] md:flex-row flex flex-col md:gap-10 p-10'>
                <img src={statimage} alt="..." className='w-[500px] mx-auto my-4 rounded-md' />
                <div>
                    <div className='text-[#00df90] font-bold mt-4'>
                        DATA ANALYTICS DASHBOARD
                    </div>
                    <h1 className='md:text-4xl sm:text-3xl font-bold text-2xl md:py-3'>
                        Manage Data Analytics Centrally
                    </h1>
                    <p className='text-justify max-w-[450px]'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium quas, temporibus rem, eaque dolore consequatur atque ex vitae ipsam excepturi debitis, minus quae voluptates neque ab. Culpa ad officia eligendi!
                    </p>
                    <button className='hover:scale-105 duration-300 hover:text-black hover:bg-[hsl(159,100%,44%)] text-2xl px-6 py-3 my-8 w-[200px]  bg-black font-medium rounded-md self-center text-[#00df90]'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics