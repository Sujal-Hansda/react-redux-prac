import React from 'react'
import { useproductApi } from '../hooks/productHooks'

const Filters = ({handleSearch}) => {

  return (
    <div className='p-3 bg border  border-gray-500 rounded-2xl flex justify-between'>
      <div className='flex gap-8'>
        <input 
        onChange={(e)=>handleSearch(e.target.value)}
        className='w-full outline-0   rounded p-2' type="text" placeholder='Search Products...' />
      </div>
      <div className='flex gap-10'>
        <select className='bg-black text-white'>
        <option value="">Select Category</option>
        <option value="groceries">groceries</option>
        <option value="beauty">beauty</option>
        <option value="fragrances">fragrances</option>
        <option value="furniture">furniture</option>
      </select>
      <button className='px-10 cursor-pointer font-semibold p-2 bg-white/50 text-black rounded border-0'>Search</button>
      </div>
      
    </div>
  )
}

export default Filters