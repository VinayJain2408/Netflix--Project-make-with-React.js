import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './FakeDisplay.css'


function FakeDisplay() {

  let [Products, setProduct] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
      console.log(response.data)
      setProduct(response.data)
    }

    fetchData()


  }, [])

  return (
    <>
      <h1>Ecommerce</h1>
      <div className='flex'>
        {
          Products.map((name, index) => {
            if (index < 100)
              return (
                <div className='box'>
                  <img src={name.thumbnailUrl}></img>
                  <h2>{name.title}</h2>
                </div>

              )
          })
        }
      </div>

    </>
  )
}

export default FakeDisplay