import React from 'react'
import Navbar from '../components/navbar'
import Head from 'next/head'
import Footer from '../components/footer'
const gallery = () => {
  return (
    <div className='dark:bg-gray-900 bg-gray-50'>
      <Head>
        <title>Data Science--Gallery</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <div className="md:mt-10 mt-0 mx-6 md:mx-10">
        <div className=" fex md:py-48 py-40 flex-col  text-center " data-wow-delay=".2s">
          <span className={`text-8xl dark:opacity-72 title text-gray-500 dark:text-white`}>Our Gallery</span>
          <h2 className={`text-4xl text-center text-gray-500 dark:text-white lg:px-72 md:40 px-5 relative -top-5`}>
            Know Details About Our Company
          </h2>
          <p className="lg:px-80 md:40 text-gray-500 dark:text-white px-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.
          </p>
        </div>
        <div className="lg:px-40 md:20">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap w-full mb-20">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
                  <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                </div>
                <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 dark:text-white">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven not heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
              </div>
              <div className="flex flex-wrap -m-4">
                <div className="md:w-1/2 p-4">
                  <div className=" p-6 rounded-lg">
                    <img className="h-80 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                    <h3 className="tracking-widest text-gray-500 dark:text-white text-xs font-medium title-font">SUBTITLE</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                    <p className="leading-relaxed text-base text-gray-500 dark:text-white">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                  </div>
                </div>
                <div className="md:w-1/2 p-4">
                  <div className=" p-6 rounded-lg">
                    <img className="h-80 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content" />
                    <h3 className="tracking-widest text-gray-500 dark:text-white text-xs font-medium title-font">SUBTITLE</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
                    <p className="leading-relaxed text-base text-gray-500 dark:text-white">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                  </div>
                </div>
                <div className="md:w-1/2 p-4">
                  <div className=" p-6 rounded-lg">
                    <img className="h-80 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content" />
                    <h3 className="tracking-widest text-gray-500 dark:text-white text-xs font-medium title-font">SUBTITLE</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
                    <p className="leading-relaxed text-base text-gray-500 dark:text-white">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                  </div>
                </div>
                <div className="md:w-1/2 p-4">
                  <div className=" p-6 rounded-lg">
                    <img className="h-80 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content" />
                    <h3 className="tracking-widest text-gray-500 dark:text-white text-xs font-medium title-font">SUBTITLE</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                    <p className="leading-relaxed text-base text-gray-500 dark:text-white">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default gallery