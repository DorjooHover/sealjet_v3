import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
// import { Navigation, Ally } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation';

function Pagination({ postsPerPage, totalPosts, paginate }) {
     const  pageNumbers = []
     let num = Math.ceil(totalPosts / postsPerPage)
     for(let i = 1; i <= num ; i++) {
          pageNumbers.push(i)
     }
     
     return (
          <Swiper 
          // modules = {[Navigation, Ally]}
          spaceBetween={6}
          slidesPerView={9}
          // navigation
          className="w-3/5 px-10s"
          >
               {pageNumbers.map(number => 
                    <SwiperSlide key={number} >
                         <li><a className="border-solid border-2 px-2" onClick={() => paginate(number)}>{number}</a></li>
                    </SwiperSlide>
               )}

          </Swiper>
     )
}

export default Pagination
