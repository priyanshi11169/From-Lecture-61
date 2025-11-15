import { useState } from 'react';
import './Footer';

function Footer() {
  const [count, setCount] = useState(0)
  return (
     <div className='h-20 bg-gray-700 flex place-content-around items-center'>
      <h1 className='text-white'>Copyright 2022 | CodeYogi | All Rights Reserved </h1>
      <h1 className='text-white'>Powered By CodeYogi </h1>
      </div> 
        );
}
      
export default Footer