import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='m-auto mt-25 font-[max(3vw,20px)] text-center '>
        <p className='text-5xl font-extrabold'>For Better Experience Download <br /> Tomato App</p>
        <div className='flex justify-center mt-10 gap-[max(2vw,2.5px)]'>

        <img src={assets.play_store} alt="" className='w-[max(30vw,120px)] max-w-45  cursor-pointer transition-all duration-500 hover:scale-105'/>
        <img src={assets.app_store} alt="" className='w-[max(30vw,120px)] max-w-45 cursor-pointer transition-all duration-500  hover:scale-105'/>
        </div>
    </div>
  )
}

export default AppDownload