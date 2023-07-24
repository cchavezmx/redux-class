// store.js
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useStore = create(
  persist(
    (set) => ({
      cart: [],
      saved: [],
      newProdcut: false,
      addToCart: (item) => {
        set((state) => {
          const isExist = state.cart.find((cartItem) => cartItem.id === item.id)
          if (isExist) {
            isExist.cantidad += 1
            return { ...state, cart: [...state.cart], newItem: true }
          } else {
            const updatedCart = [...state.cart, { ...item, cantidad: 1 }]
            return { ...state, cart: updatedCart, newItem: true }
          }
        })
      },
      removeFromCart: (item) => {
        set((state) => ({
          ...state,
          cart: state.cart.filter((cartItem) => cartItem.id !== item.id),
          newProdcut: false
        }))
      },
      addToSaved: (item) => {
        set((state) => ({ ...state, saved: [...state.saved, item] }))
      },
      removeFromSaved: (item) => {
        set((state) => ({
          ...state,
          saved: state.saved.filter((savedItem) => savedItem.id !== item.id)
        }))
      },
      newItem: (value) => {
        set((state) => ({ ...state, newItem: value }))
      }

    }),
    {
      name: 'shopping-cart-storage',
      storage: createJSONStorage(() => sessionStorage)
    })
)

const useStoreContext = () => {
  const store = useStore()
  return store
}

export {
  useStoreContext
}
