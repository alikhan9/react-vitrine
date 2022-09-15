import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div id='home' className='flex justify-between items-center h-24 max-w-[1240px] mx-auto  text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] p-3 z-10 hover:cursor-pointer '>REACT.</h1>
            <ul className='hidden md:flex gap-4 [&>li]:p-4'>
                <li className='hover-underline-animation'>
                    <Link to="home" spy={true} smooth={true} offset={50} duration={2000}>
                        Home
                    </Link>
                </li>
                <li className='hover-underline-animation'>
                    <Link to="company" spy={true} smooth={true} offset={50} duration={2000}>
                        Company
                    </Link>
                </li>
                <li className='hover-underline-animation'>
                    <Link to="pricing" spy={true} smooth={true} offset={50} duration={2000}>
                        Pricing
                    </Link>
                </li>
                <li className='hover-underline-animation'>
                    <Link to="contact" spy={true} smooth={true} offset={50} duration={2000}>
                        Contact
                    </Link>
                </li>
            </ul>
            <div className='block md:hidden mr-4'>
                {nav ? <AiOutlineMenu size={30} onClick={handleNav} />
                    :
                    <AiOutlineClose size={30} onClick={handleNav} />
                }
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-[100vh] bg-[hsl(0,0%,5%)] ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500 top-0 w-[60%] h-[100vh] bg-[hsl(0,0%,5%)]'}>
                <ul className='[&>li]:p-4 [&>li]:border-gray-600 pt-24 uppercase [&>li]:border-b'>
                    <li>
                        <Link to="home" spy={true} smooth={true} offset={50} duration={2000} onClick={handleNav}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="company" spy={true} smooth={true} offset={50} duration={2000} onClick={handleNav}>
                            Company
                        </Link>
                    </li>
                    <li>
                        <Link to="pricing" spy={true} smooth={true} offset={50} duration={2000} onClick={handleNav}>
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={2000} onClick={handleNav}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar