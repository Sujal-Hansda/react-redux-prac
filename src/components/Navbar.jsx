import { LogOut } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 items-center'>
      <h1>SkyDart</h1>
      <div className='flex gap-8 text-md'> 
        <NavLink className={({isActive})=>{
          return isActive?"text-yellow-500":""
        }} end to={"/main"}>Home</NavLink>
        <NavLink className={({isActive})=>{
          return isActive?"text-yellow-500":""
        }}  to={"/main/shop"}>Shop</NavLink>
        <NavLink className={({isActive})=>{
          return isActive?"text-yellow-500":""
        }}  to={"/main/about"}>About</NavLink>
      </div>
      <div className='flex gap-8 items-center'>
        <h1>hey,<strong className='text-amber-500'>Dev</strong></h1>
        <button>Cart</button>
        <LogOut size={18} className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default Navbar