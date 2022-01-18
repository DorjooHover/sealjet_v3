import React from "react";

const Posts = ({ posts, loading }) => {
     if (loading) {
          return <h2>Loading...</h2>
     }
     return (
          <ul className="mb-4">
               {posts.map(post =>
                    <div className="flex my-10">
                         <div className="mr-10 rounded-xl truncate w-1/3" ><img src="./img/info/mid-1.jfif" alt="" /></div>
                         <div className="w-2/3">
                              <span className='flex justify-between mb-2'>
                                   <h3 className="w-3/4 font-bold text-xl">{post.title}</h3>
                                   <p className='text-base text-zinc-500'>11/16/2021</p>
                              </span>
                              <p className='text-sm text-zinc-500'>{post.body}</p>
                         </div>
                    </div>
               )}
          </ul >
     )
}

export default Posts