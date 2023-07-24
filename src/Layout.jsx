import { Link } from "react-router-dom"
import { useStoreContext } from "./store"


export default function Layout({ children }) {
  const { totalProducts } = useStoreContext()
  return (
    <>
      <nav className="flex items-center justify-around bg-[#8F37FF] max-w-full text-white mb-4">
        <Link to={'/'}>
          <h1 className='p-4 text-5xl text-center'>Redux store</h1>
        </Link>
        <Link to={'/cart'}>
          <div role="button" className="badge" data-notify={totalProducts}></div>
        </Link>
      </nav>
        <main className='grid px-12'>
          {children}
        </main>
    
    </>
  )
}