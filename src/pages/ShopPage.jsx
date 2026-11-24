import React, { useEffect, useState } from 'react'
import axios from "axios"
import ProductCard from '../components/ProductCard'
import ProductSkeleton from '../components/ProductSkeleton'
import {getProductsData} from "../apis/ProductApi"
const ShopPage = () => {

  const [productsData, setProductsData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  


  const getData = async()=>
    {
      let data = await getProductsData();
      setProductsData(data)
      setIsLoading(false)

    } 
    useEffect(()=>
    {
      getData();
    },[])

  return (
    <div className='cursor-pointer'>
      {isLoading ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {Array.from({ length: 8 }).map((_, index) => (
      <ProductSkeleton key={index} />
    ))}
  </div>
) : (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {productsData.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
)}
    </div>
  )
}

export default ShopPage