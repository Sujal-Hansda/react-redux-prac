import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByValue } from '../features/CounterSlice';

const LoginPage = () => {
  const [inpValue, setInpValue] = useState(0)
  let dispatch = useDispatch();
  let {count} = useSelector((store)=>store.counter);
  return (
    <div className='p-5'>
      <h1 className='text-2xl pb-5'>Count is {count} </h1> 
      <div className='flex gap-2 pb-5'>
        <button  onClick={()=>dispatch(decrement())} className='cursor-pointer w-[100px] p-2 border rounded'>Decrement</button><br />
        <button  onClick={()=>dispatch(increment())} className='cursor-pointer w-[100px] p-2 border rounded'>Increment</button><br />
      </div>
        <input  type="text" name="" id="" onChange={(e)=>setInpValue(e.target.value)} placeholder='Enter Count' />
        <button onClick={()=>dispatch(incrementByValue(Number(inpValue)))}  className='cursor-pointer p-2 border rounded'>Add to count</button>
     
    </div>
  )
}

export default LoginPage