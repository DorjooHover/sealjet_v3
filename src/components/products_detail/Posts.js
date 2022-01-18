import React from "react";

const Posts = ({ posts, loading }) => {
     if (loading) {
          return <h2>Loading...</h2>
     }
     return (
          <>
               {posts.map(post =>
                    <div className="relative rounded bg-white">
                         <div className="products_border">
                              <img src="./img/info/mid-1.jfif" alt="" className='w-full' />
                         </div>
                         
                         <h3 className= "text-xl bot  my-2 mx-8 text-gray-700 ">{post.title}</h3>
                    </div>

               )}
          </ >
     )
}

export default Posts