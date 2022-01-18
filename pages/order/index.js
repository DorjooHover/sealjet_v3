function Order() {

     return(
          <div className="contact text-center order flex flex-col justify-center">
               <h3 className="text-2xl text-white font-bold mb-3">Захиалга өгөх</h3>
               <form action="" className="mx-auto text-left w-2/5">
                    <label htmlFor="name" className="text-white align-left tracking-wide text-sm">Захиалагчийн овог, нэр</label><br/>
                    <input type="text" id="name" className="my-2 rounded w-full px-3 py-1"/>
                    <label htmlFor="phone" className="text-white align-left tracking-wide text-sm" pattern="[0-9]{8}">Захиалагчийн утас</label><br/>
                    <input type="tel" id="phone" className="my-2 rounded w-full px-3 py-1"/>
                    <label htmlFor="email" className="text-white align-left tracking-wide text-sm">Захиалагчийн и-мэйл</label><br/>
                    <input type="text" id="email" className="my-2 rounded w-full px-3 py-1"/>
                    <label htmlFor="pname" className="text-white align-left tracking-wide text-sm">Бүтээгдэхүүний нэр</label><br/>
                    <input type="text" id="pname" className="my-2 rounded w-full px-3 py-1"/>
                    <input type="submit" value="Захиалга өгөх" className="align-center w-full py-3 mt-2 text-white text-xs text-bold bg-green-600 rounded" />
               </form>
          </div>
     )
}

export default Order