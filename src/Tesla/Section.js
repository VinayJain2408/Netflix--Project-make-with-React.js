import React from 'react'

function Section(props) {
  return (
    <section className='Content' style={{backgroundImage:`url("Tesla Image/${props.backgroundImage}")`}}>
    <section className='carName' >
       <h1>{props.carName}</h1>
       <p>{props.text}</p>
    </section>
    <section className='cta '>
         <a href=''>{props.leftbtn}</a>
         {props.rightbtn && <a href=''>{props.rightbtn}</a>}
    
     <div className='arrow'>
        {props.ico &&<img src='Tesla image/down-arrow.svg'/>}
     </div>
    </section>
    </section>
  )
}

export default Section