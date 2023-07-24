import CardCart from './CardCart'
import { useStoreContext } from './store'

export default function Cart () {
  const { cart: allProducts } = useStoreContext()

  return (
    <>
    <div>
      <h1 className="text-5xl mb-4">Carrito</h1>
      <section className="flex flex-col">
        {
          allProducts.length > 0
            ? (
                allProducts.map((producto) => (
                 <CardCart key={producto.id} producto={producto} />
                )
                )
              )
            : (
            <h2 className="text-2xl">No hay productos en el carrito</h2>
              )
        }
      </section>
    </div>
    </>
  )
}
