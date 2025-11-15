import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import  {getProductData}  from "./api.js"
import  Loading  from "./Loading"
import './ProductDetails'
import { useEffect, useState } from 'react';
import NotFound from './NotFound.jsx';

function ProductDetails ({onAddToCart}) {
  const  id  = +(useParams().id);
  const [product,setProduct] = useState();
  const [loading,setLoading] = useState(true);
  const [count,setCount] = useState(1);

  useEffect(function () {
    const p=getProductData(id);

    p.then(function (product) {
      setProduct(product);
      setLoading(false);
    });

    p.catch(function (error) {
      setLoading(false);
    });

  }, [id])

    function handleCountChange(event) {
    setCount(+event.target.value);
  }

  function onButtonClick() {
    onAddToCart(id,count);
  }
  
  
  

  if (loading) {
    return <Loading></Loading>
  }

  if (!product) {
    return <NotFound></NotFound>
  }

  
  return (
     <div className=''>
      <Link to="/" className='flex items-center  border-2 border-black w-fit p-1'>Back
      <HiArrowSmLeft className='text-3xl ' />
      </Link>
    <div className='shadow-2xl  flex gap-8 max-w-3xl  mx-auto p-7 py-8 my-5 border-3  '>
    <img className='w-[50%] ' src={product.thumbnail} alt="" />
    <div className='space-y-3'>
    <h1 className='text-4xl text-gray-800'>{product.title}</h1>
    <p className='text-2xl font-bold text-gray-800'>${product.price}</p>
    <p className='text-gray-800 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magni similique nulla deserunt, dolorum illum nam repellat omnis neque error. Deserunt in explicabo facere? Minus doloribus accusamus corporis consectetur deserunt.</p>
    <input value={count} onChange={handleCountChange} type='number' className='border-2 border-gray-400  w-12 mr-2 py-2 text-xl px-2 '  />
    <button onClick={onButtonClick} className='bg-primary-default text-white px-14 py-2 rounded-md hover:bg-primary-darkest '>Add to Cart</button>
    </div>
    </div>
    <div className='flex place-content-evenly '>
      <Link to={"/products/" + (id - 1)}>Previous
      <HiArrowSmLeft className='text-3xl border-2 border-black' /></Link>
      <Link to={"/products/" + (id + 1)}>Next
      <HiArrowSmRight className='text-3xl border-2 border-black' /></Link>
    </div>
    </div> 
    
  )
}
export default ProductDetails