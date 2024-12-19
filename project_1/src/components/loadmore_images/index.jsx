import { useEffect, useState } from "react"

import './style.css'


export default function Loadmore_image({url}){
    const [loading,setloading]=useState(false);
const [products,setproducts]=useState([])
const[count,setcount]=useState(0)
const handleclick=()=>{
setcount(count+1);
}

async function fetchproducts(){
try{
    setloading(true);
    const response = await fetch(`https://dummyjson.com/products?limit=1&skip=${count * 1}`);
    const data= await response.json();
console.log(data);
if(data&&data.products&&data.products.length){
    setloading(false);
    setproducts((prevdata)=>([...prevdata,...data.products]))
}

}
catch(e){
    setloading(false);
console.log(e);
}
}
useEffect(()=>{
    fetchproducts()
},[count])
if(loading){
    return <div>Loading Data Please Wait ...!</div>
}


    return <div className="container">
      <div >
      {products && products.length ? (
        products.map((productsitem) => (
        <div className="product" key={productsitem.id} >
            <img
              alt={productsitem.description}
              src={productsitem.images}
              />

            </div>)
        )
      ) : null}
      </div>
      <div className="btnname">
        <button onClick={handleclick} className="loadmorebtn">load more</button>
      </div>
   
    </div>
}