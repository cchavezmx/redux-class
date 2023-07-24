// https://redux-toolkit.js.org/tutorials/quick-start
import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

const initialState = {
  cart: [],
  saved: [],
  newItem: false
}

const addToCartAsync = createAsyncThunk('store/addToCartAsync', async (item, {
  fulfillWithValue
}) => {
  // para hacer una llamada a la API
  setTimeout(() => {
    return item
  }, 1000)

  return fulfillWithValue(item)
})

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    addToCart (state, action) {
      const producto = action.payload
      const payload = {
        ...producto,
        cantidad: 1
      }

      const isExist = state.cart.find((item) => item.id === producto.id)

      if (isExist) {
        isExist.cantidad += 1
        state.newItem = true
      } else {
        state.cart.push(payload)
        state.newItem = true
      }
    },

    removeFromCart (state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id)

      if (state.cart.length === 0) {
        state.cart = []
      }
    },

    addToSaved (state, action) {
      state.saved.push(action.payload)
    },

    removeFromSaved (state, action) {
      state.saved = state.saved.filter((item) => item.id !== action.payload.id)
    },

    newItem (state, action) {
      state.newItem = action.payload
    },

    removeNewItem (state, action) {
      state.newItem = action.payload
    }
  },
  extraReducers: {
    [addToCartAsync.pending]: (state, action) => {
      console.log('loading pending...')
    },
    [addToCartAsync.fulfilled]: (state, action) => {
      const producto = action.payload
      const payload = {
        ...producto,
        cantidad: 1
      }

      const isExist = state.cart.find((item) => item.id === producto.id)

      if (isExist) {
        isExist.cantidad += 1
        state.newItem = false
      } else {
        state.cart.push(payload)
        state.newItem = false
      }
    }
  }
})

const store = configureStore({
  reducer: storeSlice.reducer
})

const useStoreContext = () => {
  const dispatch = useDispatch()

  const addToCart = (item) => {
    dispatch(addToCartAsync(item))
    dispatch(storeSlice.actions.removeNewItem(true))
  }

  const removeFromCart = (item) => {
    dispatch(storeSlice.actions.removeFromCart(item))
  }

  const addToSaved = (item) => {
    dispatch(storeSlice.actions.addToSaved(item))
  }

  const removeFromSaved = (item) => {
    dispatch(storeSlice.actions.removeFromSaved(item))
  }

  const totalProducts = useSelector((state) => state.cart.length)

  const allProducts = useSelector((state) => state.cart)

  const newItem = useSelector((state) => state.newItem)

  return {
    addToCart,
    removeFromCart,
    addToSaved,
    removeFromSaved,
    totalProducts,
    allProducts,
    newItem
  }
}

export {
  store as default,
  useStoreContext
}
