import React from 'react'
import Navbar from '../components/navbar'
import Head from 'next/head'
import Footer from '../components/footer'
const contact = () => {
    return (
        <div className='dark:bg-gray-900 bg-gray-50'>
            <Head>
                <title>Data Science--Contact</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar />
            <div className="display1 md:mt-10 mt-0 mx-6 md:mx-10">
                <div className=" fex md:py-48 py-40 flex-col  text-center " data-wow-delay=".2s">
                    <span className={`text-8xl dark:opacity-72 title text-gray-500 dark:text-white`}> Contact US </span>
                    <h2 className={`text-4xl text-center text-gray-500 dark:text-white lg:px-72 md:40 px-5 relative -top-5`}>
                        Know Details About Our Company
                    </h2>
                    <p className="lg:px-80 text-gray-500 dark:text-white md:40 px-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                        convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
                        ante in maximus.
                    </p>
                </div>
                <div className="lg:px-40 md:20 pb-20">
                    <section className="text-gray-600 mt-5 mb-5body-font relative">
                        <div className="container  mx-auto flex sm:flex-nowrap flex-wrap">
                            <div className="lg:w-2/3 md:w-1/2  rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                                <iframe width="100%" height="100%" className="absolute inset-0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}></iframe>
                                <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                                    <div className="lg:w-1/2 px-6">
                                        <h2 className="title-font font-semibold text-gray-500 dark:text-white tracking-widest text-xs">ADDRESS</h2>
                                        <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                                    </div>
                                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                        <h2 className="title-font font-semibold text-gray-500 dark:text-white tracking-widest text-xs">EMAIL</h2>
                                        <a className="text-indigo-500 leading-relaxed">example@email.com</a>
                                        <h2 className="title-font font-semibold text-gray-500 dark:text-white tracking-widest text-xs mt-4">PHONE</h2>
                                        <p className="leading-relaxed">123-456-7890</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2  flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                                <h2 className="text-gray-500 dark:text-white text-lg mb-1 font-medium title-font">Feedback</h2>
                                <p className="leading-relaxed mb-5 text-gray-500 dark:text-white">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                                <div className="relative mb-4">
                                    <label className="leading-7 text-sm text-gray-500 dark:text-white">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="relative mb-4">
                                    <label className="leading-7 text-sm text-gray-500 dark:text-white">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="relative mb-4">
                                    <label className="leading-7 text-sm text-gray-500 dark:text-white">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                                <button className="text-gray-500 dark:text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                                <p className="text-xs text-gray-500 dark:text-white mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default contact