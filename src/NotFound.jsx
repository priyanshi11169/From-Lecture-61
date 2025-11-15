import { useState } from 'react'
import { Link } from "react-router-dom"
import "./NotFound";

function NotFound() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col  items-center justify-center gap-4'>
      <img className='max-w-2xl' src="https://media.geeksforgeeks.org/wp-content/uploads/20230802153215/Error-404.png" alt="" />
      <Link to="/" className='text-2xl border-2 border-black p-2 bg-gray-all'>Go To HomePage</Link>
    </div>
  )
}

export default NotFound;