import React from 'react'
import './style.css'
import {Link ,useMatch, useResolvedPath} from 'react-router-dom'

function Menu() {
  return (
    <div className='menu_container'>
        <div className='name_card'>
            <h2>DSSA</h2>
        </div>
        <ul className='menu_list'>
            <CustomLink to="/dashboard">Dashboard</CustomLink>
            <CustomLink to="/notice">Notice</CustomLink>
            <CustomLink to="/gallery">Gallery Upload</CustomLink>
            <CustomLink to="/assignment">Assignments Upload</CustomLink>
            <CustomLink to="/blog">Blog Update</CustomLink>
        </ul>
    </div>
  )
}

function CustomLink({to,children,...props}) {
    const resolvedpath = useResolvedPath(to)
    const isActive = useMatch({path:resolvedpath.pathname, end:true})
    return(
        <li className={ isActive ? "option active" : "option"}>
            <Link to={to}{...props}>
                {children}
            </Link>
        </li>
    )    
}

export default Menu