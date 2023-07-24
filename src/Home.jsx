import books from "../store.json"
import Card from "./Card"

export default function Home(){
  return (
    <>
       <section>
          {
              books.map((producto) => (
                <Card key={producto.id} producto={producto} />
              ))
          }
      </section>
    </>
  )
}