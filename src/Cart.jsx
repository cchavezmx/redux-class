import CardCart from "./CardCart"
import { useStoreReduxContext } from "./store"

export default function Cart() {
  const { products, removeToCart } = useStoreReduxContext()
  console.log(products)

  return (
    <>
    <h1 className="text-5xl">Carrito</h1>
    <section className="">
      {/* lo que se va a agreagando al cart */}
      {
        Array.isArray(products) && products.length > 0         
        ? products.map(producto => <CardCart removeToCart={removeToCart} key={producto.id} producto={producto} />)        
        : <h1>No tienes productos en el carrito</h1>
      }
      
    </section>
    </>
  )
}