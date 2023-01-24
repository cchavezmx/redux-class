import { store } from "./store"
import { useState } from "react"

const Footer = () => {
    const [total, setTotal] = useState(0)    
    return (
        <footer className="h-full text-center bg-fuchsia-200 p-4">
            <span>dev.f</span>
            <h2 className="text-5xl">Total de compra: {total}</h2>
      </footer>
    )
}

export default Footer
