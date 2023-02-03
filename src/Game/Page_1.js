import React from 'react'

function Page_1() {

    function none (){
        Page_1.style.display = 'none'
    }
  return (
    <div className='one'>
        <h1>Start The Game</h1>
        <button onClick={none}>Start</button>
    </div>

  )
}

export default Page_1