import React from 'react'
import single from '../images/single.png'
import double from '../images/double.png'
import triple from '../images/triple.png'

export const Pricing = () => {
    return (
        <div id='pricing' className='bg-white text-black w-full flex justify-center'>
            <div className=' grid w-full max-w-[1240px] md:grid-cols-3 justify-center p-16 gap-8'>
                <div className='hover:scale-105 duration-300 flex flex-col md:w-full w-[98vw] justify-center items-center h-[400px]  shadow-2xl rounded-lg 
                         [&>p]:border-b-[1px] [&>p]:w-[80%] [&>p]:text-center [&>p]:border-t-[1px] [&>p]:p-2'>
                    <img src={single} alt="..." className='w-[75px] h-[75px] translate-x-3' />
                    <div className='md:text-2xl p-2 font-bold'>
                        Single User
                    </div>
                    <div className='md:text-3xl mb-4 font-bold'>
                        $149
                    </div>
                    <p className='border-t-[1px]'>
                        500GB Storage
                    </p>
                    <p>
                        1 User Allowed
                    </p>
                    <p>
                        Send up to 2GB
                    </p>
                    <button className='hover:scale-105 duration-300 hover:text-[hsl(159,100%,44%)] hover:bg-gray-900 text-sm px-2 md:px-6  py-3 my-5 w-[80%]  bg-[#00df90] font-medium rounded-md self-center text-black'>
                        Start Trial
                    </button>
                </div>
                <div className='hover:scale-105 duration-300 bg-gray-500 flex flex-col justify-center items-center md:h-[450px] h-[400px] shadow-gray-500 shadow-2xl rounded-lg text-[hsl(0,0%,95%)]
                         [&>p]:border-b-[1px] [&>p]:w-[80%] [&>p]:text-center [&>p]:border-t-[1px] [&>p]:p-2'>
                    <img src={double} alt="..." className='w-[75px] h-[75px] ' />
                    <div className='md:text-2xl p-2 font-bold'>
                        Partnership
                    </div>
                    <div className='md:text-3xl mb-4 font-bold'>
                        $199
                    </div>
                    <p className='border-t-[1px]'>
                        2TB Storage
                    </p>
                    <p>
                        3 Users Allowed
                    </p>
                    <p>
                        Send up to 10GB
                    </p>
                    <button className='hover:scale-105 duration-300 hover:text-[hsl(159,100%,44%)] hover:bg-gray-200 text-sm px-2 md:px-6  py-3 my-5 w-[80%]  bg-gray-700 font-medium rounded-md self-center text-[hsl(159,100%,44%)]'>
                        Start Trial
                    </button>
                </div>
                <div className='hover:scale-105 duration-300 bg-gray-900 text-white flex flex-col justify-center items-center md:h-[500px] h-[400px]  shadow-gray-900 shadow-2xl rounded-lg 
                         [&>p]:border-b-[1px] [&>p]:w-[80%] [&>p]:text-center [&>p]:border-t-[1px] md:[&>p]:p-3 [&>p]:p-2'>
                    <img src={triple} alt="..." className='w-[75px] h-[75px]'  />
                    <div className='md:text-2xl p-2 font-bold'>
                        Group Account
                    </div>
                    <div className='md:text-3xl mb-4 font-bold'>
                        $299
                    </div>
                    <p className='border-t-[1px]'>
                        5TB Storage
                    </p>
                    <p>
                        10 Users Allowed
                    </p>
                    <p>
                        Send up to 20GB
                    </p>
                    <button className='hover:scale-105 duration-300 hover:text-gray-800 hover:bg-[hsl(159,100%,44%)] text-sm px-2 md:px-6  py-3 my-8 w-[80%]  bg-gray-100 font-medium rounded-md self-center text-[hsl(159,100%,40%)]'>
                        Start Trial
                    </button>
                </div>
            </div>
        </div>
    )
}
