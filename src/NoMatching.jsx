import { useState } from 'react'
import "./NoMatching";

function NoMatching() {
  const [count, setCount] = useState(0)
  return (
    <div className='bg-blue-500 text-4xl p-3 m-1 text-white'>No Matching found</div>
  )
}

export default NoMatching;