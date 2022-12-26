import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import styles from '../styles/About.module.css'
import Head from 'next/head'
const about = () => {
    return (
        <div className='dark:bg-gray-900 bg-gray-50'>
            {/* <div className=''> */}
            <Head>
                <title>Data Science--About us</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Navbar />
            <div className="display1 md:mt-10 mt-0 mx-6 md:mx-10">
                <div className=" fex md:py-48 py-40 flex-col  text-center " data-wow-delay=".2s">
                    <span className={`text-8xl opacity-72 dark:opacity-72 title`}> ABOUT US </span>
                    <h2 className={`text-4xl text-center text-gray-500 dark:text-white lg:px-72 md:40 px-5 relative -top-5`}>
                        Know Details About Our Company
                    </h2>
                    <p className="lg:px-80 text-gray-500 dark:text-white md:40 px-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                        convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
                        ante in maximus.
                    </p>
                </div>
                <div className="lg:px-40 md:20">
                    <section className="text-gray-600 body-font">
                        <div className="container mx-auto flex  py-24 md:flex-row flex-col items-center">
                            <div className="lg:flex-grow md:w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                <h3 className={`text-5xl opacity-72 dark:opacity-72 title`}>CURIOUS ?</h3>
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-500 dark:text-white">Get to know about us
                                    <br className="hidden lg:inline-block text-gray-500 dark:text-white" />relive our journey
                                </h1>
                                <p className="mb-8 leading-relaxed text-gray-500 dark:text-white">Get acquainted with our team and understand how we work and proceed towards success.</p>
                                <p className="mt-4 text-gray-500 dark:text-white"><a href="#" className={styles.spepcial_link}>Read more about us</a></p>
                            </div>
                            <div className="lg:max-w-lg lg:w-1/3 md:w-1/3 w-5/6">
                                <img className="object-cover object-center  rounded-lg" alt="hero" src="./sq_img_6.jpg" />
                            </div>
                        </div>
                    </section>
                    <hr className="my-8 h-px bg-gray-600 border-0 dark:bg-gray-700" />
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 pt-24 pb-10 mx-auto">
                            <div className="flex flex-wrap -m-4 text-center">
                                <div className="p-4  sm:w-1/4 w-1/2">
                                    <h2 className="text-gray-500 dark:text-white title-font font-medium sm:text-4xl text-3xl">2.7K</h2>
                                    <p className="text-gray-500 dark:text-white leading-relaxed">Completed Projects</p>
                                </div>
                                <div className="p-4  sm:w-1/4 w-1/2">
                                    <h2 className="text-gray-500 dark:text-white title-font font-medium sm:text-4xl text-3xl">1.8K</h2>
                                    <p className="text-gray-500 dark:text-white leading-relaxed">Winners &amp; Awards</p>
                                </div>
                                <div className="p-4  sm:w-1/4 w-1/2">
                                    <h2 className="text-gray-500 dark:text-white title-font font-medium sm:text-4xl text-3xl">35</h2>
                                    <p className="text-gray-500 dark:text-white leading-relaxed">Number of Team</p>
                                </div>
                                <div className="p-4  sm:w-1/4 w-1/2">
                                    <h2 className="text-gray-500 dark:text-white title-font font-medium sm:text-4xl text-3xl">4</h2>
                                    <p className="text-gray-500 dark:text-white leading-relaxed">Line of Codes</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr className="my-8 h-px bg-gray-600 border-0 dark:bg-gray-700"></hr>
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto flex flex-wrap">
                            <div className="flex flex-wrap w-full">
                                <div className="lg:w-3/5 md:w-1/2 md:pr-10 md:py-6">
                                    <div className="col-md-12 my-5">
                                        <h4 className="text-xl text-gray-500 dark:text-white">02</h4>
                                        <h1 className="text-5xl text-gray-500 dark:text-white"><span className={`text-5xl dark:opacity-72 title`}>OUR</span><br /> Values</h1>
                                        <div className="hh-50"></div>
                                    </div>
                                    <div className="flex relative pb-12">
                                        <div className="flex-grow pl-4">
                                            <h2 className="font-medium title-font text-sm text-gray-500 dark:text-white mb-1 tracking-wider">Integrity</h2>
                                            <p className="leading-relaxed text-gray-500 dark:text-white">Our first principal is honesty, which helps us meet the expectations we create.</p>
                                        </div>
                                    </div>
                                    <div className="flex relative pb-12">

                                        <div className="flex-grow pl-4">
                                            <h2 className="font-medium title-font text-sm text-gray-500 dark:text-white mb-1 tracking-wider">Commitment</h2>
                                            <p className="leading-relaxed text-gray-500 dark:text-white">Our commitment to our work and our clients is an unbreakable bond.</p>
                                        </div>
                                    </div>
                                    <div className="flex relative pb-12">

                                        <div className="flex-grow pl-4">
                                            <h2 className="font-medium title-font text-sm text-gray-500 dark:text-white mb-1 tracking-wider">Passion</h2>
                                            <p className="leading-relaxed text-gray-500 dark:text-white">Passion drives us to perform better, progress continually, and deliver timely.</p>
                                        </div>
                                    </div>
                                    <div className="flex relative pb-12">

                                        <div className="flex-grow pl-4">
                                            <h2 className="font-medium title-font text-sm text-gray-500 dark:text-white mb-1 tracking-wider">Learning</h2>
                                            <p className="leading-relaxed text-gray-500 dark:text-white">Passion drives us to perform better, progress continually, and deliver timely.</p>
                                        </div>
                                    </div>
                                    <div className="flex relative">
                                        <div className="flex-grow pl-4">
                                            <h2 className="font-medium title-font text-sm text-gray-500 dark:text-white mb-1 tracking-wider">Team-work</h2>
                                            <p className="leading-relaxed text-gray-500 dark:text-white">Our team members are all about helping each other.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                                    <div className="col-md-12 my-5">
                                        <h4 className='text-xl text-gray-500 dark:text-white'>03</h4>
                                        <h1 className="text-5xl text-gray-500 dark:text-white"><span className={`text-5xl dark:opacity-72 title`}>OUR</span><br /> Goal Statement</h1>
                                        <div className="hh-50"></div>
                                    </div>
                                    <div className="wd_goal_description text-gray-500 dark:text-white">
                                        <p className='text-gray-500 dark:text-white'>The DSSA family believes in action, progress, and growth. The young leaves has achieved several milestones in its active years till now, but nothing keeps us from seeking more and more.  we aim to break our own records . That is not all, we are also determined to become the best branch by the end of 2022.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='py-5' id="experience">
                        <div className="p-5 text-gray-600">
                            <div className=" mb-5">
                                <h4 className='text-xl text-gray-500 dark:text-white'>04</h4>
                                <h1 className="text-5xl text-gray-500 dark:text-white"><span className={`text-5xl dark:opacity-72 title`}>OUR</span><br /> Journey</h1>
                                <p className='p-5 text-gray-500 dark:text-white'>Come join us in our journey to growth and betterment.</p>
                                <div className="hh-50"></div>
                            </div>
                            <div className="col-md-11">
                                <ul className={styles.timeline}>
                                    <li className={styles.timelineevent} data-aos="fade-up">
                                        <h1 className={styles.timelineeventicon}></h1>
                                        <div className={`${styles.timelineeventcopy} text-gray-500 dark:text-white p-8`}>
                                            <p className={`${styles.timelineeventthumbnail} text-gray-500 dark:text-white`}>January 2022 - March 2022</p>
                                            <h3 className='text-gray-500 dark:text-white'>Data analyst</h3>
                                            <h4 className='text-gray-500 dark:text-white'>Kserve BPO</h4>
                                            <p className='text-gray-500 dark:text-white'><strong className='text-gray-500 dark:text-white'>3 Months</strong>
                                                <br />My responsibility was to verify and clean the data...
                                            </p>
                                        </div>
                                    </li>
                                    <li className={styles.timelineevent} data-aos="fade-up">
                                        <h1 className={styles.timelineeventicon}></h1>
                                        <div className={`${styles.timelineeventcopy} text-gray-500 dark:text-white p-8`}>
                                            <p className={`${styles.timelineeventthumbnail} text-gray-500 dark:text-white`}>January 2022 - March 2022</p>
                                            <h3 className='text-gray-500 dark:text-white'>Data analyst</h3>
                                            <h4 className='text-gray-500 dark:text-white'>Kserve BPO</h4>
                                            <p className='text-gray-500 dark:text-white'><strong className='text-gray-500 dark:text-white'>3 Months</strong>
                                                <br />My responsibility was to verify and clean the data...
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="text-gray-600 body-font py-5">
                        <div className="col-md-12 mb-5">
                            <h4 className='text-xl text-gray-500 dark:text-white'>05</h4>
                            <h1 className="text-5xl text-gray-500 dark:text-white"><span className={`text-5xl dark:opacity-72 title`}>OUR</span><br /> Executive</h1>
                            <div className="hh-50"></div>
                        </div>
                        <div className="container px-5 pt-24  pb-10 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                                    <div className="h-full text-center">
                                        <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302" />
                                        <p className="leading-relaxed text-gray-500 dark:text-white">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                        <span className="inline-block h-1 w-10 rounded text-gray-500 dark:text-white bg-indigo-500 mt-6 mb-4"></span>
                                        <h2 className="text-gray-500 dark:text-white font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                                        <p className="text-gray-500 dark:text-white">Senior Product Designer</p>
                                    </div>
                                </div>
                                <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                                    <div className="h-full text-center">
                                        <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302" />
                                        <p className="leading-relaxed text-gray-500 dark:text-white">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                        <span className="inline-block h-1 w-10 rounded text-gray-500 dark:text-white bg-indigo-500 mt-6 mb-4"></span>
                                        <h2 className="text-gray-500 dark:text-white font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                                        <p className="text-gray-500 dark:text-white">Senior Product Designer</p>
                                    </div>
                                </div>
                                <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                                    <div className="h-full text-center">
                                        <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302" />
                                        <p className="leading-relaxed text-gray-500 dark:text-white">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                        <span className="inline-block h-1 w-10 rounded text-gray-500 dark:text-white bg-indigo-500 mt-6 mb-4"></span>
                                        <h2 className="text-gray-500 dark:text-white font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                                        <p className="text-gray-500 dark:text-white">Senior Product Designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="text-gray-600 body-font ">
                        <div className="container px-5 py-24 mx-auto flex flex-wrap">
                            <div className="flex w-full mb-20 flex-wrap">
                                <div className="sm:text-3xl text-2xl font-medium title-font lg:w-1/3 lg:mb-0 mb-4"><h4 className='text-xl text-gray-500 dark:text-white'>06</h4>
                                    <h1 className="text-5xl text-gray-500 dark:text-white"><span className={`text-5xl dark:opacity-72 title`}>OUR</span><br /> Gallery</h1>
                                    <div className="hh-50"></div></div>
                            </div>
                            <div className="flex flex-wrap md:-m-2 -m-1">
                                <div className="flex flex-wrap w-1/2">
                                    <div className="md:p-2 p-1 w-1/2">
                                        <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300" />
                                    </div>
                                    <div className="md:p-2 p-1 w-1/2">
                                        <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301" />
                                    </div>
                                    <div className="md:p-2 p-1 w-full">
                                        <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360" />
                                    </div>
                                </div>
                                <div className="flex flex-wrap w-1/2">
                                    <div className="md:p-2 p-1 w-full">
                                        <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361" />
                                    </div>
                                    <div className="md:p-2 p-1 w-1/2">
                                        <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302" />
                                    </div>
                                    <div className="md:p-2 p-1 w-1/2">
                                        <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303" />
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

export default about