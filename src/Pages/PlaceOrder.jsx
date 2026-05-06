import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext)

  return (
    <form className='flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 mt-16 lg:mt-24 px-4 lg:px-0'>

      {/* Delivery Information */}
      <div className='w-full lg:max-w-[max(30%,500px)]'>
        <p className='text-2xl lg:text-3xl font-semibold mb-6 lg:mb-10'>
          Delivery Information
        </p>
        <div className='flex flex-col sm:flex-row gap-2.5'>
          <input type="text" placeholder='First Name'
            className='mb-4 w-full p-2.5 border border-gray-300 rounded-3xl outline-orange-600' />
          <input type="text" placeholder='Last Name'
            className='mb-4 w-full p-2.5 border border-gray-300 rounded-3xl outline-orange-600' />
        </div>
        <input type="email" placeholder='Email'
          className='mb-4 w-full p-2.5 border border-gray-300 rounded-3xl outline-orange-600' />
        <input type="text" placeholder='Street'
          className='mb-4 w-full p-2.5 border border-gray-300 rounded-3xl outline-orange-600' />
        <div className='flex flex-col sm:flex-row gap-2.5'>
          <input type="text" placeholder='City'
            className='mb-4 w-full p-2.5 border border-gray-300 rounded-3xl outline-orange-600' />
          <input type="text" placeholder='State'
            className='mb-4 w-full p-2.5 border border-gray-300 rounded-3xl outline-orange-600' />
        </div>
        <div className='flex flex-col sm:flex-row gap-2.5'>
          <input type="text" placeholder='Zip Code'
            className='mb-4 w-full p-2.5 border border-gray-300 rounded-3xl outline-orange-600' />
          <input type="text" placeholder='Country'
            className='mb-4 w-full p-2.5 border border-gray-300 rounded-3xl outline-orange-600' />
        </div>
        <input type="text" placeholder='Phone'
          className='mb-4 w-full p-2.5 border border-gray-300 rounded-3xl outline-orange-600' />
      </div>

      {/* Cart Total */}
      <div className='w-full lg:max-w-[max(40%,500px)]'>
        <div className='flex flex-col gap-5'>
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
          <button className='bg-orange-500 text-white py-3 px-0 w-full sm:w-[max(15vw,200px)] rounded-xl border-none cursor-pointer text-base lg:text-lg'>
            Proceed to Payment
          </button>
        </div>
      </div>

    </form>
  )
}

export default PlaceOrder