import React from 'react'

const Newsletter = () => {
    return (
        <div className='p-16 md:flex-row md:gap-10 flex flex-col text-white justify-center'>
            <div>
                <h1 className='md:text-4xl text-2xl mb-4'>
                    Want tips & tricks to optimize your flow?
                </h1>
                <p className='mb-4'>
                    Sign up to our newsletter and stay up to date.
                </p>
            </div>
            <div>
                <div className='flex gap-4 mb-4'>
                    <input 
                    className='active:border-red-400 outline-none text-sm px-2 md:px-6 py-3 w-[50%] md:w-[200px] font-medium rounded-md self-center text-black'
                    type="text" 
                    placeholder='Enter your email'
                     />
                    <button className='hover:scale-105 duration-300 hover:text-[hsl(159,100%,44%)] hover:bg-gray-800 text-sm px-2 md:px-6 py-3 md:w-[200px] w-[50%]  bg-[#00df90] font-medium rounded-md self-center text-black'>
                        Notify me
                    </button>
                </div>
                <p>
                    We care about the protection of your data. Read
                    our
                    <span className='ml-1 underline text-[#00df90] hover:cursor-pointer underline-offset-2'>
                        Private Policy
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Newsletter