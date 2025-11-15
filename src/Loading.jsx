import { useState } from 'react'
import { FaSpinner } from "react-icons/fa6";
import "./Loading";

function Loading() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex items-center justify-center grow '>
      <FaSpinner className='animate-spin text-4xl '/>
    </div>
  );
}

export default Loading;