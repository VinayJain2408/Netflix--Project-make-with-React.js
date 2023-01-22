import React, { useState ,useEffect } from 'react'
import axios from 'axios'
import "./Ecommerce.css"
function Home() {

    const [products,setProduct] =useState([])

    useEffect(()=>{
        axios.get("https://dummyjson.com/products?_limit=100")
        .then((response)=>{
            console.log(response.data.products)
            setProduct(response.data.products)
        })
    },[])

  
    
    return (
      <>
       <h1>Ecommerce</h1>
       <div className='flex'>
       {
        products.map((product)=>{
            return(
           
             <div className='vinay'>
                 <h1>{product.brand}</h1>
             <img src={product.thumbnail}></img>
              <h2>{product.title}</h2>
             
              <h2>Price:{product.price}$</h2>
              </div>
            )
        })
    }
    </div>
      </>
            
   
    )
}

export default Home