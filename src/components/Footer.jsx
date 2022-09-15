import React from 'react'
import {FaFacebookSquare, FaInstagram, FaTwitterSquare, FaGithubSquare, FaDribbbleSquare } from 'react-icons/fa'

const Footer = () => {
    return (
        <div id='contact' className='text-white w-full flex justify-center'>
            <div className='grid md:grid-cols-2 md:max-w-[1240px] md:w-full w-[80%] p-4 md:p-16'>
                <div>
                    <h1 className='text-[#00df90] mb-2'>REACT.</h1>
                    <p className='md:max-w-[500px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vel ipsum commodi excepturi quas eum tenetur natus culpa rem cupiditate volupt
                    </p>
                    <div className='flex justify-between md:w-[75%] my-6'>
                        <FaFacebookSquare size={30} className='hover:text-[#00df90] hover:scale-105 hover:cursor-pointer' />
                        <FaInstagram size={30} className='hover:text-[#00df90] hover:scale-105 hover:cursor-pointer' />
                        <FaTwitterSquare size={30} className='hover:text-[#00df90] hover:scale-105 hover:cursor-pointer' />
                        <FaGithubSquare size={30} className='hover:text-[#00df90] hover:scale-105 hover:cursor-pointer' />
                        <FaDribbbleSquare size={30} className='hover:text-[#00df90] hover:scale-105 hover:cursor-pointer' />
                    </div>
                </div>
                <div className='flex justify-between md:m-0 my-4 gap-2'>
                    <ul className='[&>li]:p-1'>
                        <li className='text-[#00df90] mb-1'>Solutions</li>
                        <li className='underline-offset-8 decoration-[#00df90] hover:cursor-pointer hover:underline'>Analytics</li>
                        <li className='underline-offset-8 decoration-[#00df90] hover:cursor-pointer hover:underline'>Marketing</li>
                        <li className='underline-offset-8 decoration-[#00df90] hover:cursor-pointer hover:underline'>Commerce</li>
                        <li className='underline-offset-8 decoration-[#00df90] hover:cursor-pointer hover:underline'>Insights</li>
                    </ul>
                    <ul className='[&>li]:p-1'>
                        <li className='text-[#00df90] mb-1'>Support</li>
                        <li className='underline-offset-8 decoration-[#00df90] hover:cursor-pointer hover:underline'>Pricing</li>
                        <li className='underline-offset-8 decoration-[#00df90] hover:cursor-pointer hover:underline'>Documentation</li>
                        <li className='underline-offset-8 decoration-[#00df90] hover:cursor-pointer hover:underline'>Guides</li>
                        <li className='underline-offset-8 decoration-[#00df90] hover:cursor-pointer hover:underline'>API Status</li>
                    </ul>
                    <ul className='[&>li]:p-1'>
                        <li className='text-[#00df90] mb-1'>Company</li>
                        <li className='underline-offset-8 decoration-[#00df90] hover:cursor-pointer hover:underline'>About</li>
                        <li className='underline-offset-8 decoration-[#00df90] hover:cursor-pointer hover:underline'>Blog</li>
                        <li className='underline-offset-8 decoration-[#00df90] hover:cursor-pointer hover:underline'>Press</li>
                        <li className='underline-offset-8 decoration-[#00df90] hover:cursor-pointer hover:underline'>Jobs</li>
                        <li className='underline-offset-8 decoration-[#00df90] hover:cursor-pointer hover:underline'>Partners</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer