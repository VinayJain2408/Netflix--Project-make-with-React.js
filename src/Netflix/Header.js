import React, { useState } from 'react'

function Header() {

  const [black , setblack] = useState(false)

  window.onscroll = ()=>{
    if(window.scrollY > 100){
      setblack (true)

    }
    else
      setblack(false)
  }



  return (
    <div className={(black ? 'top dark' : 'top')}>
        <div className='top_img'>
        <img src='Netflix.png'></img>
        </div>
        <h2>Sign In</h2>
        
    </div>
  )
}

export default Header