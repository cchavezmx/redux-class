import { useState } from "react"
import { store, books } from "./store"
import Card from "./Card"
import Footer from "./Footer"
import SideWare from "./Sideware"


const Redux = () => {
  
  const [carrito, setCarrito] = useState([])
  const [openCarrito, setOpenCarrito] = useState(false)
  const handledOpenCarrito = () => setOpenCarrito(!openCarrito)

  return (
    <main>
      <nav className="bg-[#8F37FF] w-screen text-white">
        <h1 className='p-4 text-5xl text-center'>Redux store</h1>
        <div onClick={handledOpenCarrito} className="badge" data-notify={carrito.length || 0}></div>
      </nav>
      <section className='productos'>
          {
            books.map(producto => <Card key={producto.id} producto={producto} />)
          }        
      </section>
      <Footer />
      <SideWare openCarrito={openCarrito}/>
    </main>
  )
}


export default Redux