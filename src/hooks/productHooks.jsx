import { useQuery } from "@tanstack/react-query"
import { getProductsData } from "../apis/ProductApi"
import { useEffect, useState } from "react"

export const useproductApi = ()=>
{
    let {data,isPending,error} = useQuery({
    queryKey:['products'],
    queryFn:getProductsData,
    staleTime:5000,
  });

  let filterProducts = (searchParams)=>
  {
   let filteredData= data.filter((val)=>
    val.title.toLowerCase().includes(searchParams.toLowerCase())
  )

  
  
  }

  return {
    isPending,
    data,
    error,
    filterProducts,
    
    
  }
}