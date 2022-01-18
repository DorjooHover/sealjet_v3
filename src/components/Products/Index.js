import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Pagination from '../products_detail/Pagination'
import Posts from '../products_detail/Posts'

const Index = () => {
     const [posts, setPosts] = useState([])
     const [loading, setLoading] = useState(false)
     const [currentPage, setCurrentPage] = useState(1)
     const [postsPerPage, setPostsPerPage] = useState(5)

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
          <div className="px-28 py-10 products bg-slate-300">
               <div className="mx-20 my-10 bg-white flex p-20 justify-center align-center">
                    <div className="mrw-1/2 h-full m-auto">
                    <img src="./img/info/mid-1.jfif" alt="" className='w-full' />
                    </div>
                    <div className='w-1/2 ml-24'>
                         <h1 className="font-bold text-xl mb-2">Бүтээгдэхүүн нэр</h1>
                         <p className="text-base leading-normal mb-10">Гидравлик, нэг талын ажиллагаатай. Стандарт хэрэглээнд зориулагдсан тэгш бус хэмт бүлүүрийн сальник. Тохирсон үүрэнд сууж байж стандарт хэрэглээ болдог.</p>
                         <div className="flex">
                              <div className="w-1/2 flex flex-col">
                                   <h5 className="text-slate-500 mb-4 text">Материал</h5>
                                   <h5 className="text-slate-500 mb-4 text">Өнгө</h5>
                                   <h5 className="text-slate-500 mb-4 text">Загвар</h5>
                                   <h5 className="text-slate-500 mb-4 text">Зориулалт</h5>
                                   <h5 className="text-slate-500 mb-4 text">Материал</h5>
                                   <h5 className="text-slate-500 mb-4 text">Өнгө</h5>
                              </div>
                              <div className="w-1/2 flex flex-col">
                                   <h5 className="text-slate-500 mb-4 text">Төмөр</h5>
                                   <h5 className="text-slate-500 mb-4 text">Хар</h5>
                                   <h5 className="text-slate-500 mb-4 text">90</h5>
                                   <h5 className="text-slate-500 mb-4 text">Машины мотор</h5>
                                   <h5 className="text-slate-500 mb-4 text">Төмөр</h5>
                                   <h5 className="text-slate-500 mb-4 text">90</h5>
                              </div>
                         </div>
                    </div>
               </div>
               <h2 className="text-xl font-bold mb-10">Сальник ангилал</h2>
               <div className="grid grid-cols-5 gap-4 ">
               <Posts posts={currentPosts} loading={loading} />
               </div>

               <h2 className="text-xl font-bold my-10">Мотор ангилал</h2>
               <div className="grid grid-cols-5 gap-4 ">
                    <Posts posts={currentPosts} loading={loading}/>

               </div>
               <div className="py-16">
                    <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
               </div>
          </div>
     )
}
export default Index

