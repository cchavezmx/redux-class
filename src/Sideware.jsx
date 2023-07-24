const SideWare = ({ openCarrito }) => {
  return (
    <div className="showopen w-64 h-full absolute bg-white shadow z-[101] p-3" hidden={!openCarrito}>
      <h5 className="text-3xl text-center mb-4">Tus compras</h5>
      <ul>
          <p>Aquí pon los productos que se van a greagando al carrito</p>
      </ul>
    </div>
  )
}

export default SideWare
