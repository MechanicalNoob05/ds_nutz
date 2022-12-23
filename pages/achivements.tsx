import React from 'react'
import Navbar from '../components/navbar'
import Head from 'next/head'
import Footer from '../components/footer'
const achievements = () => {
  return (
    <div className='dark:bg-gray-900 bg-gray-50'>
      <Head>
        <title>Data Science--Achievements</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <div className="display1 md:mt-10 mt-0 mx-6 md:mx-10">
        <div className=" fex md:py-48 py-40 flex-col  text-center " data-wow-delay=".2s">
          <span className={`md:text-8xl text-6xl dark:opacity-72 title text-gray-500 dark:text-white`}>Achievements</span>
          <h2 className={`text-4xl text-center lg:px-72 md:40 px-5 relative -top-5 text-gray-500 dark:text-white`}>
            Know Details About Our Company
          </h2>
          <p className="lg:px-80 md:40 px-5 text-gray-500 dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.
          </p>
        </div>
        <div className="lg:px-40 md:20">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-xs text-gray-500 dark:text-white tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-500 dark:text-white">Master Cleanse Reliac Heirloom</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500 dark:text-white">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven not heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
              </div>
              <div className="flex flex-wrap">
                <div className="lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                  <h2 className="text-lg sm:text-xl text-gray-500 dark:text-white font-medium title-font mb-2">Shooting Stars</h2>
                  <p className="leading-relaxed text-base text-gray-500 dark:text-white mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                  <a className="text-gray-500 dark:text-white inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <div className="lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                  <h2 className="text-lg sm:text-xl text-gray-500 dark:text-white font-medium title-font mb-2">Shooting Stars</h2>
                  <p className="leading-relaxed text-base text-gray-500 dark:text-white mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                  <a className="text-gray-500 dark:text-white inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <div className="lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                  <h2 className="text-lg sm:text-xl text-gray-500 dark:text-white font-medium title-font mb-2">Shooting Stars</h2>
                  <p className="leading-relaxed text-base text-gray-500 dark:text-white mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                  <a className="text-gray-500 dark:text-white inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <div className="lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                  <h2 className="text-lg sm:text-xl text-gray-500 dark:text-white font-medium title-font mb-2">Shooting Stars</h2>
                  <p className="leading-relaxed text-base text-gray-500 dark:text-white mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                  <a className="text-gray-500 dark:text-white inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default achievements