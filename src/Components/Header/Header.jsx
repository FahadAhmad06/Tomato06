import React from 'react'

const Header = () => {
  return (
    <div className='relative h-[34vw] my-[30px] mx-auto bg-[url("/header_img.png")] bg-no-repeat bg-contain'>

        <div className='flex absolute flex-col max-w-[60%] left-[6vw] items-start bottom-[10%] gap-[1vw] animate-fade-in'>
            <h2 className='text-4xl font-bold text-white text-[max(5vw,22px)]'>Order your favourite food here</h2>
            <p className='text-white text-[1.3vw]'>Choose from a diverse menu featuring array of dishes crafted with the finest ingredients and culinary expertise. Our mission to satisfy your cravings and elevate your dining experience, One delicious meal at a time.</p>
            <button className=' bg-white text-gray-600 py-1 lg:py-3 px-2 lg:px-4 text-[8px] lg:text-[max(1vw,13px)] rounded-full'>View Menu</button>
        </div>
    </div>
  )
}

export default Header