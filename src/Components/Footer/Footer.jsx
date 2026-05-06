
import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='text-white bg-black flex items-center flex-col gap-5 pt-20 py-5 px-[8vw] mt-25 '>
            <div className='w-full grid grid-col-1 sm:grid-2 lg:grid-cols-[2fr_1fr_1fr] gap-20'>
                <div className='flex flex-col items-start gap-5'>
                    <img src={assets.logo} alt="" className='w-32'/>
                    <p>
                        Experience the finest flavors delivered straight to your door, where every dish is carefully prepared with fresh ingredients to bring restaurant-quality meals to your home.
                    </p>
                    <div className='flex  gap-5'>
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className='flex flex-col items-start gap-4'>
                    <h2 className='font-extrabold text-2xl'>Company</h2>
                    <ul className='flex flex-col gap-2 text-sm md:text-base cursor-pointer'>
                        <li className='list-none'>Home</li>
                        <li className='list-none'>About Us</li>
                        <li className='list-none'>Delivery</li>
                        <li className='list-none'>Privacy Policy</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start gap-4'>
                    <h2 className='font-bold text-2xl'>Get in Touch</h2>
                    <ul className='flex flex-col text-sm md:text-base'>
                        <li className='list-none'>+92-324-555-999</li>
                        <li className='list-none'>Contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr className='w-full h-0.5 my-5' />
            <p>Copyright 2026 © Fahad Ahmad - All Right Reserved</p>
        </div>
    )
}

export default Footer