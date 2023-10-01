import books from "../store.json"
import Card from "./Card"
import { useStoreReduxContext } from "./store"

export default function Home(){

  const { addToCart } = useStoreReduxContext()

  return (
    <>
       <section>
          {
              books.map((producto) => (
                <Card 
                  key={producto.id} 
                  producto={producto} 
                  addToCart={addToCart}
                />
              ))
          }
      </section>
    </>
  )
}