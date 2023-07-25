import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
// funciones asincronas
// pending
// fullfilled

const initialState = {
    cart: []
}

// todas las acciones que necesitamos
const storeSlice = createSlice({
	name: "store-redux",
	initialState,
		reducers: {
			addToCart (state, action) {
				const currentProduct = action.payload
				// filter [] y find {}
				// 
				const isExist = state.cart.find((product) => product.id === currentProduct.id)
				// si es falso retorna un undefined				

				if(isExist) {
					// en caso de no hacer lo de la linea 27 esto pasaria
					// undefined + numero = NaN
					isExist.cantidad += 1
					// isExist.cantidad = isExist.cantidad + 1
				} else {
					// importante añadir la propiedad de cantidad al objeto que voy a añadir al arreglo de carrito
					currentProduct.cantidad = 1
					state.cart.push(currentProduct)
				}				
			},
			removeToCart (state, action) {
				const currentProuct = action.payload
				// buscar el producto en el arreglo de cart
				// si existe => lo eliminamos => creamos un nuevo arreglo sin ese elemento
				// indexOf =>
				state.cart = state.cart.filter(producto => producto.id !== currentProuct.id)
				// si no existe => nunca va pasar
			}
		},
})


// useReducer => react
const store = configureStore({
    reducer: storeSlice.reducer
})


const useStoreReduxContext = () => {
	const dispath = useDispatch()

	const addToCart = (item) => {
    // action = "add_to_cart"
    dispath(storeSlice.actions.addToCart(item))
  }

	const removeToCart = (item) => {
		// tener un modal que
		dispath(storeSlice.actions.removeToCart(item))
	}

	const products = useSelector((state) => state.cart)
	const cartItems = useSelector((state) => state.cart.length)

	return {
		addToCart, 
		products,
		cartItems,
		removeToCart
	}
}

export {
    store as default,
    useStoreReduxContext
}

