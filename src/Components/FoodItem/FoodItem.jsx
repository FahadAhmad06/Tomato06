import React, { useContext} from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => {

    const {cartItems,addToCart,removeFromCart} = useContext (StoreContext);

    return (

        <div className='animate-fade-in rounded-3xl shadow-2xl m-auto w-full  sm:w-[70%] lg:w-[100%] hover:shadow-[15px_15px_27px_rgba(0,0,0,0.7)] hover:transition duration-700'>


            <div className='relative'>
                <img src={image} alt="" className='rounded-t-3xl' />

                {!cartItems[id] ? <img className='absolute cursor-pointer bottom-4 right-4 rounded-full' onClick={() => addToCart(id)} src={assets.add_icon_white} alt='' />
                    : <div className='absolute bottom-4 right-4 flex items-center gap-3 bg-white rounded-4xl p-1 '>
                        <img className='' onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p className='text-xl font-bold'>{cartItems[id]}</p>
                        <img className='' onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />

                    </div>

                }
            </div>
            <div className=' p-5'>
                <div className='flex items-start justify-between mb-2.5'>
                    <p className='text-xl font-bold'>{name}</p>
                    <img src={assets.rating_starts} alt="" className='w-22' />
                </div>

                <p className='font-mono text-gray-600'>{description}</p>
                <p className='font-semibold text-2xl mt-2 text-orange-500'>${price}</p>
            </div>
        </div>
    )
}

export default FoodItem