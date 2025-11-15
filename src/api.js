import axios from 'axios'

 export function getProductData(id) {
  return axios.get("https://dummyjson.com/products/" + id).then( function (response){
    return response.data;
  });
}


function GetProductList() {
  return axios.get('https://dummyjson.com/products').then( function (response) {
    return response.data.products;
  })
}

export default GetProductList