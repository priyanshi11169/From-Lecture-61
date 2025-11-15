import { useState } from 'react';
import  { RiShoppingBagLine } from "react-icons/ri";
import './Navbar';

function Navbar({productCount}) {

  return (
    <div className='py-4 bg-white  '>
      <div className='max-w-6xl flex justify-between mx-auto items-center'>
        <img className='h-12' src="https://upload.wikimedia.org/wikipedia/commons/4/41/Amazon_PNG6.png" alt="" />
        <div className='flex flex-col items-center  '>
        <RiShoppingBagLine  className='text-5xl  text-primary-default'/>
        <span className='-m-6'>{productCount}</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar
