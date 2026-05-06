import React, { useContext, useState } from 'react'
import {assets} from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'


const Navbar = () => {
    const [menu, setMenu] = useState("menu")
    
    const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='py-5 px-0 flex justify-between items-center '>
        <Link to='/'><img src={assets.logo} alt='' className='w-[75px] sm:w-[100px] lg:w-[150px]'/></Link>
        <ul className='flex gap-5 text-indigo-400 text-[0px] md:text-[12px] lg:text-[18px]'>
            <Link to='/'><li onClick={() => setMenu("home")} className={`cursor-pointer pb-1 transition-all ${menu === "home" ? "border-b-1 rounded-2xl border-indigo-500 duration-500" : ""}`}>Home</li></Link>
            <li onClick={() => setMenu("menu")} className={`cursor-pointer pb-1 transition-all ${menu === "menu" ? "border-b-1 rounded-2xl border-indigo-500 duration-400" : ""}`}>Menu</li>
            <li onClick={() => setMenu("mobileapp")} className={`cursor-pointer pb-1 transition-all ${menu === "mobileapp" ? "border-b-1 rounded-2xl border-indigo-500 duration-400" : ""}`}>Mobie-App</li>
            <li onClick={() => setMenu("contactus")} className={`cursor-pointer pb-1 transition-all ${menu === "contactus" ? "border-b-1 rounded-2xl border-indigo-500 duration-400" : ""}`}>Contact-Us</li>
        </ul>

        <div className='gap-7 flex items-center'>
            <img src={assets.search_icon} alt="" />
            <div className='flex relative'>
                <Link to='/Cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={`flex absolute min-w-2.5 min-h-2.5 bg-orange-600 -top-2 -right-1 rounded-full border-black border-1 ${getTotalCartAmount()===0 ? "" : "dot"}`}></div>
            </div>
            <button className='py-1 lg:py-2 px-3.5 lg:px-7 bg-transparent border-1 border-orange-600 rounded-full hover:bg-amber-50 cursor-pointer transition duration-500'>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar