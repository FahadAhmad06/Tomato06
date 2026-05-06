import React from 'react'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div>
        <h2 className='text-4xl font-medium text-gray-800' >Explore our menu</h2>
        <p className='sm:w-full lg:max-w-[70%] text-gray-600'>Choose from a diverse menu featuring a delectable array o dishes. Our mission is to satisfy your cravings and elevate your dining experience, One delicious meal at a time.</p>

        <div className='flex items-center text-center gap-8 justify-between my-6 overflow-x-auto scrollbar-hide'>
            {menu_list.map((item,index) => {
                return(
                    <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index}>
                        <img src={item.menu_image} alt="" className={`w-[8vw] min-w-[80px] cursor-pointer rounded-[50%] transition duration-200 ${category === item.menu_name ? "border-3 border-orange-600 p-0.5 transition" : ""}`}/>
                        <p className='text-gray-500 cursor-pointer  text-[max(1.4vw,16px)] pt-2'>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr className='m-2.5 h-0.5 border-gray-600'/>
    </div>
  )
}

export default ExploreMenu