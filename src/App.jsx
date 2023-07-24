import Layout from "./Layout"
import Home from "./Home"
import Cart from "./Cart"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    )      
  },
  {
    path: '/cart',
    element: (
      <Layout>
        <Cart />
      </Layout>      
    )
  }
])

export default function App() {
  return <RouterProvider router={router} />
}