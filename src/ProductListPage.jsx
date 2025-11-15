import { useEffect, useState } from 'react'
import  ProductList from './ProductList'
import   GetProductList  from './api'
import NoMatching from './NoMatching'
import  Loading  from "./Loading"
import "./ProductListPage"


function ProductListPage() {

  const [productList,setProductList] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(function () {

    GetProductList().then(function (products) {
      setProductList(products);
      setLoading(false);
    })
    
}, []);

  const [query, setQuery] = useState("")
  const [sort, setSort] = useState("Default sorting")

 
  let data=productList.filter(function (item) {
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();
    return  lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
  });
   
  if (sort === "name") {
    data.sort(function (x, y) {
      return x.title > y.title ? 1: -1;
    });
  } else if (sort === "priceLowToHigh") {
    data.sort(function (x, y) {
      return x.price - y.price;
    });
  }
  else if (sort === "priceHighToLow") {
    data.sort(function (x, y) {
      return y.price - x.price;
    });
  }

  function queryHandleChange(event) {
    setQuery(event.target.value)
  }
  function sortHandleChange(event) {
    setSort(event.target.value)
  }
  
  if (loading) {
    return <Loading></Loading>
  }
  

  return (  
      <div className='max-w-6xl  mx-auto space-y-6 bg-white px-9 py-12.5 my-16 shadow-2xl '>
        <input onChange={queryHandleChange} className='p-2 self-center border-2 border-gray-400 text-xl' placeholder='Search' value={query} />
        <select onChange={sortHandleChange} value={sort} className=' p-2 ml-20' name="" id="">
          <option value="Default sorting">Default Sort</option>
          <option value="name">Sort by title</option>
          <option value="priceLowToHigh">Sort by price:low to high</option>
          <option value="priceHighToLow">Sort by price:high to low</option>
        </select>
         {data.length > 0 && <ProductList products={data} />}
         {data.length == 0 && 
         <NoMatching></NoMatching>}
        


        <div className='space-x-1 mb-3'>
          <input className='w-8 border-2 border-primary-default p-1 text-primary-dark ml-20' type="" name="" id=""  />
          <input className='w-8 border-2 border-primary-default p-1  text-primary-dark' type="" name="" id=""  />
          <input className='w-8 border-2 border-primary-default p-1  text-primary-dark' type="" name="" id=""  />
          
        </div>
        </div>
      
      
   
    
  )
}
export default ProductListPage
    