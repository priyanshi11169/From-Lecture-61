import { useState } from 'react'
import Product from "./Product"
import "./ProductList";

function ProductList({products}) {
  const [count, setCount] = useState(0);

  return (
    <div className='md:grid grid-cols-3 gap-6  space-y-4 md:space-y-0'>
      {products.map(function (item) {
      return  (
        <Product {...item} key={item.title} ></Product>
      )
    })}
    </div>
  );
}

export default ProductList;