import React, { useState } from 'react'
import CancelIcon from '@mui/icons-material/Cancel';

function Header() {

  let [menu, set] = useState(false)
  function menuopen() {
    set(true)
  }
  function close() {
    set(false)
  }
  return (
    <header>

      <img src='Tesla image/logo.svg' />
      <nav>
        <ul>
          <li>Model S</li>
          <li>Model 3</li>
          <li>Model X</li>
          <li>Model Y</li>
          <li>Solar Roofs</li>
          <li>Solar Panel</li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>Shops</li>
          <li>Accounts</li>
          <li onClick={menuopen}>Menu</li>
        </ul>
      </nav>



      <ul className='sidebar' style={{ right: (menu === false) ? "-250px" : "0" }}>
        <CancelIcon className='kuchnhi' onClick={close} />
        <li><a href=''>Modal-3</a></li>
        <li><a href=''>Modal-y</a></li>
        <li><a href=''>Modal-s</a></li>
        <li><a href=''>Modal-x</a></li>
        <li><a href=''>Solar Panel</a></li>
        <li><a href=''>Solar Roofs</a></li>
        <li><a href=''>Accessories</a></li>
        <li><a href=''>Insurance</a></li>
        <li><a href=''>Inventory</a></li>
        <li><a href=''>Demo Drive</a></li>
        <li><a href=''>Technology</a></li>
        <li><a href=''>Commercial Energy</a></li>
      </ul>

    </header>
  )
}

export default Header