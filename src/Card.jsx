const Card = ({ producto, addToCart }) => {
    const { nombre, imagen, numeroDePaginas, costo, id } = producto

    return (        
    <div className="flex mt-2">
        <div key={id} className="rounded-lg flex w-auto shadow-md relative">
            <picture className="h-64 overflow-hidden shadow-md ">
                <img src={imagen} className="w-64 h-64 object-cover"/>
            </picture>
            <div className="p-3">
                <h2 className="text-2xl">{nombre}</h2>
                <p className="text-xl text-gray-400">Número de páginas: {numeroDePaginas}</p>
                <p className="w-auto mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.
                    Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.
                </p>                
            </div>
            <div className="absolute bottom-4 right-4">
                <p className="text-xl">Costo: $ {costo}</p>                
            </div>            
        </div>
        <div className='flex flex-col gap-2 items-center rounded-sm w-64 h-64 place-content-center shadow-md p-4'>
            <button 
                onClick={() => addToCart(producto)}
                className="w-full bg-black text-gray-50 p-4 rounded">
                Agregar
            </button>
            <button className='bg-blue-500 text-gray-50 p-4 rounded-md w-full'>
                Pagar
            </button>
      </div>
    </div>
    )

}

export default Card
