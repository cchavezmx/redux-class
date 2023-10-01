import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

// persisteDAta

const initialState = {
    cart: []
}

const addToCartAsync = createAsyncThunk('store-redux/addToCartAsync', async (item) => {
	console.log(item)
	// otros metodos que tenemos para ejecutar funciones asincronas
	// crear una funcion asincrona	
	// console.log('setTimeOut', item)
	// return item
	// peticion asincrona con fetch
	return fetch('https://fakestoreapi.com/products/1')
	.then(res=>res.json())
	.then(json=> {
		console.log(json)
		return json
	})	
})

// todas las acciones que necesitamos
const storeSlice = createSlice({
	name: "store-redux",
	initialState,
		reducers: {
			addToCart (state, action) {
				// 
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
		extraReducers: {
			[addToCartAsync.pending]: (state, action) => {
				console.log('is pending', action.payload)
			},
			[addToCartAsync.fulfilled]: (state, action) => {
				console.log('success', action.payload)
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
			[addToCartAsync.rejected]: (state, action) => {
				console.log('rejected', action.payload)
				const paylodError = {
					nombre: "error en la peticion"
				}

				state.cart.push(paylodError)

			}
		}
})


// useReducer => react
const store = configureStore({
    reducer: storeSlice.reducer
})


const useStoreReduxContext = () => {
	const dispath = useDispatch()

	// si queremos añadir esto que se va guardado en una base de datos
	const addToCart = (item) => {
    // action = "add_to_cart"
	dispath(addToCartAsync(item))
    // dispath(storeSlice.actions.addToCart(item))
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

