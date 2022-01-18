import Link from 'next/link'
function Nav() {
     return (
          <div className="flex justify-between px-20 py-3 nav ">
               <div className="flex items-center">
                    <div className="mr-20 w-16"><img src="./img/sealjet-logo.png" alt="" /></div>
                    <ul className="flex">
                         <li className="px-5"><Link href='/'><a className="text-white font-bold">Нүүр</a></Link></li>
                         <li className="px-5"><Link href="/Products"><a className="text-white font-bold">Бүтээгдэхүүн</a></Link></li>
                         <li className="px-5"><Link href='/Infos'><a href="#product" className="text-white font-bold">Мэдээ</a></Link></li>
                         <li className="px-5"><a href="#contact" className="text-white font-bold">Холбоо</a></li>
                         <li className="px-5"><Link href="/order"><a href="" className="text-white font-bold">Захиалах</a></Link></li>
                    </ul>
               </div>
               <form method="GET" className="flex items-center">
                    <div className="relative text-gray-600 focus-within:text-gray-400 ">
                         <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                              <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                   <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                              </button>
                         </span>
                         <input type="search" name="q" className="w-72 py-1 text-sm text-white bg-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Бүтээгдэхүүн хайх" autoComplete="off" />
                    </div>
               </form>
          </div>
     )
}

export default Nav