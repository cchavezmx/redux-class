import { useStoreContext } from './store.js'

export default function CardCart({ producto }){

  const { removeFromCart } = useStoreContext()
  const { nombre, imagen, cantidad = 0 } = producto

  return (
    <div className="grid grid-cols-2 rounded-md p-2 shadow-lg border-solid border-2 border-gray-50">
        <div>
          <div className="card_product">
            <img 
              className="h-64 w-64 object-cover rounded-md"
              src={imagen}
              alt="producto" 
            />
          <h2 className="text-4xl py-2">
            { nombre }
          </h2>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <button 
            onClick={() => removeFromCart(producto)}
            className="btn btn-danger text-2xl bg-blue-300 w-fit p-2 px-4 rounded-md my-2">
              Eliminar
          </button>
          <span className="p-2 bg-gray-500 rounded-md w-fit">
            <strong className="text-gray-100 text-2xl">Cantidad: </strong>
            <input className="text-2xl w-[50px] rounded bg-gray-500 text-gray-50" type="number" defaultValue={cantidad || 0} />
          </span>
        </div>
      </div>
  )
}