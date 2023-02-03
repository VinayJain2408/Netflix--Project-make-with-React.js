import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Main() {
    return (<>
        <div>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/blog'>Blog</NavLink></li>
                <li><NavLink to='/services'>Services</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </div>
        <Outlet />
    </>
    )
}

export default Main;