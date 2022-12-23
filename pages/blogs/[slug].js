import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
const Slug = () => {
  const [blog, setblog] = useState({})
  const router = useRouter();
  const {slug} = router.query;
  function createMarkup(c) {
    return { __html: c };

}
useEffect(() => {
  getblog()
}, [slug])
const getblog = async () => {
  console.log(slug)
  const response = await fetch("./api/Getblog", {
      method: "POST",
      headers: {
          "Content-type": "application/json;charset=UTF-8",
      },
      // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({slug}) // body data type must match "Content-Type" header
  });
  const  json5 = await response.json()
  // console.log(json5)
  if(json5.success){
      setblog(json5.blog)
  }
}
function createMarkup(c) {
  return { __html: c };
}
  return (
    <div className='dark:bg-gray-900 bg-gray-50'>
      <main className="main">
        <Navbar />
        <div className=" fex md:py-48 py-40 flex-col  text-center " data-wow-delay=".2s">
          <span className={`text-8xl dark:opacity-72 title text-gray-500 dark:text-white`}>{blog.author}</span>
          <h2 className={`text-4xl text-center text-gray-500 dark:text-white lg:px-72 md:40 px-5 relative -top-5`}>
            {blog.title}
          </h2>
          <p className="lg:px-80 md:40 text-gray-500 dark:text-white px-5">
          {blog.meta_description}
          </p>
        </div>
        <div className='px-64 py-20'>
        {blog && <div  dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default Slug