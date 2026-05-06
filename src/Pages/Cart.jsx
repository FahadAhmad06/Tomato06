import React, { useContext } from 'react'
import { assets } from '../assets/assets';
import { StoreContext } from '../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext)

    const navigate = useNavigate();

    return (
        <div className='mt-16 lg:mt-25 px-4 lg:px-0'>

            {/* Cart Table */}
            <div className='overflow-x-auto'>
                <div className='min-w-[600px]'>
                    <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[max(1vw,12px)]'>
                        <p>Item</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>
                    <br />
                    <hr className='h-[1px] border-gray-400' />

                    {food_list.map((item, index) => {
                        if (cartItems[item._id] > 0) {
                            return (
                                <div key={item._id}>
                                    <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr_0.5fr] items-center text-[max(1vw,12px)] my-2.5 mx-0 text-black'>
                                        <img src={item.image} alt="" className='w-14 lg:w-20' />
                                        <p>{item.name}</p>
                                        <p>${item.price}</p>
                                        <p>{cartItems[item._id]}</p>
                                        <p>${item.price * cartItems[item._id]}</p>
                                        <p onClick={() => removeFromCart(item._id)}
                                            className='cursor-pointer text-red-500 font-bold text-lg'>✕</p>
                                    </div>
                                    <hr className='h-[1px] border-gray-400' />
                                </div>
                            )
                        }
                    })}
                </div>
            </div>

            {/* Bottom Section */}
            <div className='mt-12 lg:mt-20 flex flex-col lg:flex-row justify-between gap-8 lg:gap-[max(12vw,20px)]'>

                {/* Cart Total */}
                <div className='flex-1 flex flex-col gap-5'>
                    <h2 className='text-2xl lg:text-3xl font-bold'>Cart Total</h2>
                    <div className='border border-gray-300 rounded-xl p-5 flex flex-col gap-3'>
                        <div className='flex justify-between text-gray-400'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr className='my-2' />
                        <div className='flex justify-between text-gray-400'>
                            <p>Delivery Fee</p>
                            <p>$2</p>
                        </div>
                        <hr className='my-2' />
                        <div className='flex justify-between font-bold text-black'>
                            <b>Total</b>
                            <b>${getTotalCartAmount() + 2}</b>
                        </div>
                    </div>
                    <button
                        onClick={() => navigate('/order')}
                        className='bg-orange-500 text-white py-3 px-0 w-full sm:w-[max(15vw,200px)] rounded-xl border-none cursor-pointer text-base lg:text-lg'>
                        Proceed to Checkout
                    </button>
                </div>

                {/* Promo Code */}
                <div className='flex-1'>
                    <div>
                        <p className='text-gray-400 text-sm lg:text-base'>
                            If you have a promo code, Enter it here
                        </p>
                        <div className='mt-2.5 flex justify-between items-center bg-gray-200 rounded-xl overflow-hidden'>
                            <input
                                type="text"
                                placeholder='Promo Code'
                                className='bg-transparent border-none pl-2.5 outline-none w-full py-3 text-sm lg:text-base' />
                            <button className='bg-black text-white py-3 px-3 w-[max(10vw,120px)] rounded-xl border-none shrink-0 text-sm lg:text-base'>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cart