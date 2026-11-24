import { useState } from 'react'
import Filters from '../components/Filters'
import ProductCard from '../components/ProductCard'
import ProductSkeleton from '../components/ProductSkeleton'
import { useproductApi } from '../hooks/productHooks'

const ShopPage = () => {
 let {data,isPending,error} = useproductApi()
  const [search, setSearch] = useState("")

  if (error) return <h1>{error.message}</h1>
  
  const handleSearch = (value) => {
  setSearch(value)
}

  const filteredData = data?.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <Filters handleSearch={handleSearch} />
    <div className='grid grid-cols-4 gap-4 p-4'>
      {filteredData?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
      
    </>
  )
}


export default ShopPage