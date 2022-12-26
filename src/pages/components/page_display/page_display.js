import React from 'react'
import './style.css'
import { Route, Routes } from 'react-router-dom'
import Assignment from '../pages/assignments/assignment'
import Blog from '../pages/Blog/blog'
import Dashboard from '../pages/dashboard/dashboard'
import Gallery from '../pages/gallery/gallery'
import Notice from '../pages/notice/notice'

function Page_display() {
  return (
    <div className='page_display_container'>
        <div className='title'>
            <h1>Title</h1>
        </div>
        <Routes>
            <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
            <Route path='/notice' element={<Notice></Notice>}></Route>
            <Route path='/gallery' element={<Gallery></Gallery>}></Route>
            <Route path='/assignment' element={<Assignment></Assignment>}></Route>
            <Route path='/blog' element={<Blog></Blog>}></Route>
        </Routes>
    </div>
  )
}

export default Page_display