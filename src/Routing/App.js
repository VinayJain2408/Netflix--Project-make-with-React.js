import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import Services from './Services'
import Blog from './Blog'
import Main from './Main'
import Contact from './Contact'
import SingleBlog from './SingleBlog'
import ExtraBlog from './ExtraBlog'
import './App.css'

function App() {

    return (

        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Main />}>
                <Route path='/about' element={<About />}></Route>
                <Route path='/blog' element={<ExtraBlog />}>  
                  <Route index element={<Blog />}></Route>
                  <Route path=':id' element={<SingleBlog />}></Route>
                </Route>               
                <Route path='/services' element={<Services />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
               </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App