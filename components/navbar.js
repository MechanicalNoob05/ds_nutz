import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {useTheme} from 'next-themes'
import Head from 'next/head'
export default function Navbar() {
  const {theme, setTheme} = useTheme()
  const router = useRouter()
  const [toggle, settoggle] = useState(false)
  const [token, settoken] = useState(false)
  const [togglenav, settogglenav] = useState(false)
  const [userdata, setuserdata] = useState()
  function handleclick() {
    if (toggle) {
      settoggle(false)
    } else {
      settogglenav(false)
      settoggle(true)
    }
  }
  function handlemode() {
    setTheme(theme==="light" ? "dark" : "light")
  }
  function handleclicknav() {
    if (togglenav) {
      settogglenav(false)
    } else {
      settoggle(false)
      settogglenav(true)
    }
  }
  useEffect(() => {
    var item = localStorage.getItem('token')
    if (item) {
      settoken(true)
    } else {
      settoken(false)
    }
    var userdatas = localStorage.getItem('userdata')
    if (userdatas) {
      setuserdata(JSON.parse(userdatas))
    } else {
      setuserdata(false)
    }
  }, [])

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("userdata");
    router.push("/login")
  }
  return (
    <>
      <Head>
        <link rel='stylesheet' href='../icon/css/all.min.css'></link>
      </Head>
      <nav className="px-2 sm:px-4 py-2.5 bg-gray-400 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" className="flex items-center">
            <img src="../logo-no-background.png" className="h-6 mr-3 sm:h-10" alt="Flowbite Logo" />
          </Link>
          <div className="flex items-center md:order-2">

          <button type="button" onClick={handlemode}  className="flex mr-3 border text-sm   dark:bg-gray-900 bg-gray-400 rounded-full md:mr-0  mt-0 " id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              {(theme ==="light" ?
                (<i className={`fa-solid text-xl px-1 mt-1 py-1 w-10 h-10 rounded-full fa-sun`}></i>)
                : (<i className={`fa-solid text-xl px-1 py-1 mt-1 w-10 h-10 rounded-full fa-moon`}></i>)
              )}
            </button>
            <button type="button" onClick={handleclick} className="flex mr-3 ml-3 text-sm border dark:bg-gray-800 bg-gray-400 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 mt-0 " id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              {(userdata ?
                (<i className={`fa-solid text-xl px-1 py-1 ml-1 mr-1 mt-1 w-10 h-10 rounded-full fa-${userdata.firstname.charAt(0).toLowerCase()}`}></i>)
                : (<i className={`fa-solid text-xl px-1 py-1 ml-1 mr-1 mt-1 w-10 h-10 rounded-full fa-user`}></i>)
              )} { }
            </button>           
            <div className={`z-50 right-10 top-10 ${toggle ? "absolute" : "hidden"} text-black my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`} id="user-dropdown">
              <div className="px-4 py-3">
                {(userdata ?
                  (<><span className="block text-sm text-gray-900 dark:text-white">{userdata.firstname + " " + userdata.lastname}</span><span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{userdata.email}</span></>)
                  : (<><span className="block text-sm text-gray-900 dark:text-white"></span><span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400"></span></>)
                )}
              </div>
              <ul className="py-1 text-sm  text-gray-900 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                <li>
                  <Link href="/achivements" className="block px-4 py-2 hover:bg-gray-100 text-gray-900 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white">Achievements</Link>
                </li>
                <li>
                  <Link href="/gallery" className="block px-4 py-2 hover:bg-gray-100 text-gray-900 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white">Gallery</Link>
                </li>
                <li>
                  <Link href="/project" className="block px-4 py-2 hover:bg-gray-100 text-gray-900 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white">Projects</Link>
                </li>
                <li>
                  <Link href="/blog" className="block px-4 py-2 hover:bg-gray-100 text-gray-900 dark:text-white dark:hover:bg-gray-600 dark:hover:text-white">Blogs</Link>
                </li>
              </ul>
              {(!token ?
                <div className="py-1">
                  <Link href="/login" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white text-gray-900 dark:hover:text-white">Login</Link>
                </div> :
                <div className="py-1">
                  <Link href="/login" onClick={logout} className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white dark:hover:text-white">Sign out</Link>
                </div>
              )}
            </div>
            <button data-collapse-toggle="navbar-multi-level" type="button" onClick={handleclicknav} className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>
          <div className={`items-center justify-between  ${togglenav ? "flex" : "hidden"} w-full md:flex md:w-auto md:order-1`} id="mobile-menu-2">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg w-full md:w-auto  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-gray-400 dark:bg-gray-900 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</Link>
              </li>
              <li>
                <Link href="/about" className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
              </li>
              <li>
                <Link href="/team" className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Team</Link>
              </li>
              <li>
                <Link href="/contact" className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}



