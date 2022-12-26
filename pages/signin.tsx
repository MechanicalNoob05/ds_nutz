import React, { useEffect, useContext, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {useTheme} from 'next-themes'
import styles from '../styles/Login.module.css'
import Head from 'next/head'
const Signin = () => {
    const {theme, setTheme} = useTheme()
    useEffect(() => {
        setTheme("light" )
    }, [])
    const router = useRouter()
    const [signindetail, setsignindetail] = useState({email: "", password: "", firstname: "", lastname: "",  phonenumber: ""})
    const handleclick = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        signin( signindetail.email, signindetail.password, signindetail.firstname, signindetail.lastname, signindetail.phonenumber)
    }
    const onchange = (e: { target: { name: any; value: any } }) => {
        setsignindetail({ ...signindetail, [e.target.name]: e.target.value })
    }
    const signin = async (email: string, password: string, firstname: string, lastname: string, phonenumber: string) => {
        // Default options are marked with *
        const response = await fetch('./api/sign', {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({ email, password, firstname, lastname,phonenumber})
        });
        const json = await response.json()
        if (json.success) {
            router.push("/login")
        } else {
            alert(json.message)
        }
    }
    return (
        <div className='bg-gradient-to-r from-blue-50 to-transparent'>
            <Head>
                <title>Data Science--Signin</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className='md:px-40 px-5 pt-10' id='signin'>
                <section className=" border gradient-form rounded-md bg-white h-auto">
                    <div className="container">
                        <div className="justify-center align-center">
                            <div className="w-full">
                                <div className=" text-black">
                                    <div className="md:flex ">
                                        <div className="lg:w-1/2 w-full">
                                            <div className="md:px-16 px-4  pb-5">
                                                <div className="flex flex-col text-center items-center">
                                                    <div className="w-40 h-40 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                                                        <img src="./favicon.png" className="w-40 h-40" alt="logo" />
                                                    </div>
                                                    <div className="flex-grow">
                                                        <h2 className="text-gray-600 text-2xl title-font font-medium mb-4">We are The D.S.S.A Team</h2>
                                                    </div>
                                                </div>
                                                <form>
                                                    <p className='text-gray-400 mb-6'>Please login to your account</p>
                                                    <div className="relative z-0 mb-4 w-full group">
                                                        <input type="email" autoComplete="username" name="email" onChange={onchange} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-400 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:drop-shadow-xl dark:focus:border-blue-500" placeholder="Enter your email address" required />
                                                    </div>
                                                    <div className="relative z-0 mb-4 w-full group">
                                                        <input type="password" name="password" autoComplete="new-password" onChange={onchange} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-400 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:drop-shadow-xl dark:focus:border-blue-500" placeholder="Enter your password" required />
                                                    </div>
                                                    <div className="grid md:grid-cols-2 md:gap-6">
                                                        <div className="relative z-0 mb-4 w-full group">
                                                            <input type="text" name="firstname" onChange={onchange} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-400 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:drop-shadow-xl dark:focus:border-blue-500" placeholder="First name" required />
                                                        </div>
                                                        <div className="relative z-0 mb-4 w-full group">
                                                            <input type="text" name="lastname" onChange={onchange} id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-400 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:drop-shadow-xl dark:focus:border-blue-500" placeholder="last name" required />
                                                        </div>
                                                    </div>
                                                    <div className="relative z-0 mb-4 w-full group">
                                                        <input type="tel" pattern="[0-9]{10}" onChange={onchange} name="phonenumber" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-400 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:drop-shadow-xl dark:focus:border-blue-500" placeholder="Phone number" required />
                                                    </div>
                                                    <div className="text-center flex flex-col pt-1 mb-2 pb-2">
                                                        <button className={`block  text-lg  text-white py-1 ${styles.gradientcustom2} mb-3 `} type="button" onClick={handleclick}>Log
                                                            in</button>
                                                        <a className="text-muted text-gray-700" href="#!">Forgot password?</a>
                                                    </div>
                                                    <div className="d-flex flex align-items-center justify-between pb-4">
                                                        <p className="mb-0 me-5 text-gray-700">Already have an account?</p>
                                                        <Link aria-current="page" href="/login"><button type="button" className="rounded-lg border-2 py-1 text-md hover:bg-rose-500 hover:text-white text-red-500 px-2 border-rose-500 ms-3">Login now</button></Link>
                                                    </div></form>
                                            </div>
                                        </div>
                                        <div className={`lg:w-1/2 w-full flex align-center justify-center align-middle ${styles.gradientcustom2}`}>
                                            <div className="text-white md:px-20 px-4  py-4 md:py-60 ">
                                                <h4 className="mb-4 text-black text-2xl">We are more than just a Association</h4>
                                                <p className="small mb-0 text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Signin