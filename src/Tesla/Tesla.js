import React from 'react'
import './Tesla.css'
import Header from './Header'
import Section from './Section'
function Tesla() {
  return (
    <>
     
      <Header />
      <Section carName="Modal 3"
        text = "Order Online For Touchless Delivery"
        leftbtn = "coustm order"
        rightbtn = "Exiting Inventory"
        ico  ={true}
        backgroundImage = "model-3.jpg"
      />
      <Section carName="Modal Y"
       text = "Order Online For Touchless Delivery"
       leftbtn = "coustm order"
       rightbtn = "Exiting Inventory"
       backgroundImage = "model-y.jpg"
       />
      <Section carName="Modal S"
         text = "Order Online For Touchless Delivery"
         leftbtn = "coustm order"
         rightbtn = "Exiting Inventory"
         backgroundImage = "model-s.jpg"
      />
      <Section carName="Modal X "
         text = "Order Online For Touchless Delivery"
         leftbtn = "coustm order"
         rightbtn = "Exiting Inventory"
         backgroundImage = "model-x.jpg"
      />
      <Section  carName="Solar Panel "
         text = "Lowest Cost Solar Panels In India"
         leftbtn = "coustm order"
         rightbtn = "Exiting Inventory"
         backgroundImage = "solar-panel.jpg"
      />
      <Section  carName="Solar Roof "
       text = "Produce Clean Energy From Your Roof"
       leftbtn = "coustm order"
       rightbtn = "Exiting Inventory"
       backgroundImage = "solar-roof.jpg"/>
    
      <Section  carName="Accessories" 
       leftbtn = "SHOP"
       backgroundImage = "accessories.jpg"
      />

  
   </>
  )
}

export default Tesla