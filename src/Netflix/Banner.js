import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Banner() {


  
    const Image_path = 'https://image.tmdb.org/t/p/original'
    const API_KEY = '251ac7a461ba588030cfa89b0cd75329';
    let [Back_Img , setBack_Img] = useState([])
    
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3//trending/all/week?api_key=${API_KEY}&language=en-US`)
        .then((response)=>{
            console.log(response.data.results)
            setBack_Img(response.data.results[Math.floor(Math.random
              ()* response.data.results.length)])
        })
    },[])
  //  console.log(Back_Img)

  return (
    <div className='Big_Banner' style={{backgroundImage:'url('+Image_path + Back_Img.backdrop_path+')'}}>
      <h1>{Back_Img.title ||Back_Img.name }</h1>
      <p>{Back_Img.overview}</p>
      <div className='anchor'>
      <a href='' >Play</a>
      <a href='' >My List</a>
      </div>
      
    </div>
  )
}

export default Banner