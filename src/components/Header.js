import Logo from './Logo'
// import Test from './Test'
function Header() {
     return (
          <div className="bg-[url('/img/main/back1.png')] relative bg-cover header flex flex-col content-between py-10">
               <div className="flex z-20 relative w-3/4 mx-auto mt-20 mb-20">
                    <div className="w-11/12"><img src="./img/product/product_1.jpg" alt="" /></div>
                    <div className="ml-20">
                         <h3 className="py-10 font-bold text-white text-4xl">Сальникийн төрөлжсөн дэлгүүр</h3>
                         <p className="opacity-60 text-white text-justify ">Монгол - Австрийн хамтарсан Сийл Жет Монгол ХХК нь 2003 оноос эхлэн бүх төрлийн авто машин, техник тоног төхөөрөмжийн нягтруулагч цагираг, жийргэвч ( сальник )-ийг үйлдвэрлэн дотоодын зах зээлд нийлүүлж байна. </p>
                    </div>
               </div>
               <span className="bg-black absolute inset-0 opacity-40 z-10"></span>
               <div className="logos z-20 px-20"><Logo /></div>
          </div>
     )
}

export default Header