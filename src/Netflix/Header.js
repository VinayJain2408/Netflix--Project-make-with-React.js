import React, { useState } from 'react'

function Header() {

  const [black , setblack] = useState(false)

  // function data(){
  //   if()
  // }

  return (
    <div className='top'>
        <div className='top_img'>
        <img src='Netflix.png'></img>
        </div>
        <h2>Sign In</h2>
        
    </div>
  )
}

export default Header