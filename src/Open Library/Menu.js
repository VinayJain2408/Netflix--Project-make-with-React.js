import React from 'react'
import { BrowserRouter ,  Route, Routes } from 'react-router-dom'
import About from './About'
import Service from './Services'
import Blog from './Blog'
import Book from './Book'
import Contact from './Contact'

function Home() {
  return (

    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/service' element={<Service/>}></Route>
            <Route path='/blog' element={<Blog/>}></Route>
            <Route path='/book' element={<Book/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Home