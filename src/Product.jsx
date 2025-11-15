import { useState } from 'react'
import { Link } from "react-router-dom"
import './Product'

function Product({thumbnail,category,title,price,rating,id}) {
  const [count, setCount] = useState(0)

  return (
    <div className= 'max-w-xs space-y-1 border-4 border-primary-default p-2'>
      <div className='w-full aspect-square '>
      <img src={thumbnail} alt="" className=' object-cover h-full w-full  '/>
      </div>
      <h1 className='text-gray-500 text-xl'>{category}</h1>
      <h1 className='text-2xl font-semibold text-gray-900'>{title}</h1>
      <img src={rating} alt="" className='w-20 object-cover' />
      <h1 className='font-bold text-gray-900 '>${price}</h1>
      <Link className='border border-black p-1 rounded-md' to={'/products/' + id}>View Detail</Link>
    </div>
  )
}

export default Product