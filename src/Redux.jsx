import { useState } from "react"
import { store, books } from "./store"
import Card from "./Card"
import Footer from "./Footer"


const Redux = () => {
  
  return (
    <main>
      <nav className="bg-[#8F37FF] w-screen text-white">
        <h1 className='p-4 text-5xl text-center'>Redux store</h1>
        <div className="badge" data-notify={10}></div>
      </nav>
      <section className='productos'>
          {
            books.map(producto => <Card key={producto.id} producto={producto} />)
          }        
      </section>
      <Footer />
    </main>
  )
}


export default Redux