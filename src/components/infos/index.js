import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Pagination from '../infos_detail/Pagination'
import Posts from '../infos_detail/Posts'

const Index = () => {
     const [posts, setPosts] = useState([])
     const [loading, setLoading] = useState(false)
     const [currentPage, setCurrentPage] = useState(1)
     const [postsPerPage, setPostsPerPage] = useState(10)
     console.log(posts.length)
     useEffect(() => {
          const fetchPosts = async () => {
               setLoading(true)
               const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
               setPosts(res.data)
               setLoading(false)
          }
          fetchPosts()
     }, [])
     const indexOfLastPost = currentPage * postsPerPage
     const indexOfFirstPost = indexOfLastPost - postsPerPage
     const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
     const paginate = (pageNumber) => setCurrentPage(pageNumber)
     return (
          <div className="px-28 py-10">
               <div className="grid grid-cols-4 gap-3">
                    <div className="col-span-2 row-span-2 relative">
                         <div className="relative">
                              <img src="./img/info/mid-1.jfif" alt=""  className='w-full'/>
                              <span className="absolute w-full h-full bg-black opacity-40 top-0 rounded-xl"></span>
                              <h3 className="bottom-0 absolute text-xl bot text-white font-bold mb-12 mx-8">"ӨРСӨЛДӨХ ЧАДВАРТАЙ МОНГОЛ" ҮЗЭСГЭЛЭН НЭЭЛТЭЭ ХИЙЛЭЭ</h3>
                         </div>
                    </div>
                    <div className=" relative">
                         <div className="relative flex content-center">
                              <img src="./img/info/mid-1.jfif" alt=""  className='w-full'/>
                              <span className="absolute w-full h-full bg-black opacity-40 top-0 rounded-xl"></span>
                              <h3 className="bottom-0 absolute text-sm bot text-white font-bold mb-8 text-left mx-4 mb-6">"ӨРСӨЛДӨХ ЧАДВАРТАЙ МОНГОЛ" ҮЗЭСГЭЛЭН НЭЭЛТЭЭ ХИЙЛЭЭ</h3>
                         </div>
                    </div>
                    <div className=" relative">
                         <div className="relative flex content-center">
                              <img src="./img/info/mid-1.jfif" alt=""  className='w-full'/>
                              <span className="absolute w-full h-full bg-black opacity-40 top-0 rounded-xl"></span>
                              <h3 className="bottom-0 absolute text-sm bot text-white font-bold mb-8 text-left mx-4 mb-6">"ӨРСӨЛДӨХ ЧАДВАРТАЙ МОНГОЛ" ҮЗЭСГЭЛЭН НЭЭЛТЭЭ ХИЙЛЭЭ</h3>
                         </div>
                    </div>
                    <div className=" relative">
                         <div className="relative flex content-center">
                              <img src="./img/info/mid-1.jfif" alt=""  className='w-full'/>
                              <span className="absolute w-full h-full bg-black opacity-40 top-0 rounded-xl"></span>
                              <h3 className="bottom-0 absolute text-sm bot text-white font-bold mb-8 text-left mx-4 mb-6">"ӨРСӨЛДӨХ ЧАДВАРТАЙ МОНГОЛ" ҮЗЭСГЭЛЭН НЭЭЛТЭЭ ХИЙЛЭЭ</h3>
                         </div>
                    </div>
                    <div className=" relative">
                         <div className="relative flex content-center">
                              <img src="./img/info/mid-1.jfif" alt=""  className='w-full'/>
                              <span className="absolute w-full h-full bg-black opacity-40 top-0 rounded-xl"></span>
                              <h3 className="bottom-0 absolute text-sm bot text-white font-bold mb-8 text-left mx-4 mb-6">"ӨРСӨЛДӨХ ЧАДВАРТАЙ МОНГОЛ" ҮЗЭСГЭЛЭН НЭЭЛТЭЭ ХИЙЛЭЭ</h3>
                         </div>
                    </div>
                    
                    

               </div>
               <div className="py-16">
                    <Posts posts={currentPosts} loading={loading} />
                    <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
               </div>
          </div>
     )
}

export default Index