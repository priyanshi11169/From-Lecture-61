import { useEffect, useState } from "react"
import { Routes, Route} from "react-router-dom";
import ProductListPage from "./ProductListPage"
import ProductDetails from "./ProductDetails"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./App"
import NotFound from "./NotFound";

/* 3:5,
   4:3,
*/

function App() {

  const savedDataString=localStorage.getItem("my-cart") || "{}"
  const savedData=JSON.parse(savedDataString);

  const [cart, setCart] = useState(savedData);

  function handleAddToCart(productId , count) {
      const oldCount=cart[productId] || 0;
      const newCart={ ...cart, [productId]: oldCount + count};
      setCart(newCart);
      const cartString=JSON.stringify(newCart);
      localStorage.setItem("my-cart",cartString);
  }

  const totalCount=Object.keys(cart).reduce(function(output,current) {
     return  (output + cart[current]);
  },0);
  
  const path=window.location.pathname;

  return (
    <div className="min-h-screen overflow-scroll flex flex-col bg-gray-100">
    <Navbar productCount={totalCount}/>
    <div className="grow">
      <Routes>
        <Route index element={<ProductListPage/>} />
        <Route path="/products/:id" element={<ProductDetails  onAddToCart={handleAddToCart}/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
    <Footer/>
  </div>
  )
}

export default App