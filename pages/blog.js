import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Blog from "../middlware/models/blog.js"
import mongoose from "mongoose";
const Blogs = (props) => {
    const [blog, setblog] = useState([])
    useEffect(() => {
        setblog(props.blog.blogs)
    }, [])
    return (
        <div className='dark:bg-gray-900 bg-gray-50'>
            <Navbar />
            <div className=" fex md:py-48  py-40 flex-col  text-center " data-wow-delay=".2s">
                <span className={`text-8xl dark:opacity-72 title text-gray-500 dark:text-white`}>Our Blogs</span>
                <h2 className={`text-4xl text-center text-gray-500 dark:text-white lg:px-72 md:40 px-5 relative -top-5`}>
                    Know Details About Our Company
                </h2>
                <p className="lg:px-80 md:40 text-gray-500 dark:text-white px-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
                    ante in maximus.
                </p>
            </div>
            <section className="text-gray-500 dark:text-white body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {blog && (blog.map((singleblog) => {
                            return (
                                <div className="p-4 lg:w-1/3" key={singleblog.slug}>
                            <div className="h-full bg-gray-50 border dark:bg-gray-500 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 dark:text-white mb-1">{singleblog.author}</h2>
                                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-500 dark:text-white mb-3">{singleblog.title}</h1>
                                <p className="leading-relaxed mb-3 text-gray-500 dark:text-white">{singleblog.meta_description}</p>
                                <Link href={`/blogs/${singleblog.slug}`} className="text-indigo-900 inline-flex items-center">Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 dark:text-white mb-1">{singleblog.date}</h2>
                            </div>
                        </div>
                            )
                        }))}
                        
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
export async function getServerSideProps(context) {
    if(!mongoose.connections[0].readystate){
        await mongoose.connect("mongodb+srv://Manish0302:seeta11102007@dssa.ikisp2i.mongodb.net/test")
    }
    var blogs = await Blog.find()
          if (!blogs) {
            var success=false
            return json({ error:"No blog Found"});
          }
          var success=true
          var blog=JSON.parse(JSON.stringify({success,blogs}))
    return {
      props: {blog}, // will be passed to the page component as props
    }
  }
export default Blogs