import { createStore } from 'redux'
// npm install redux
// redux toolkit
// redux saga 

export const books = [
  {
			id: 1,
      nombre: "Cien años de soledad",
      imagen: "https://m.media-amazon.com/images/I/71YoFJSz3LL.jpg",
      numeroDePaginas: 458,
      costo: 25.99
  },
  {
			id: 2,
      nombre: "El gran Gatsby",
      imagen: "https://m.media-amazon.com/images/I/81sxyC3isSL.jpg",
      numeroDePaginas: 180,
      costo: 12.99
  },
  {
			id: 3,
      nombre: "Matar a un ruiseñor",
      imagen: "https://m.media-amazon.com/images/I/81+j6JIEweL.jpg",
      numeroDePaginas: 312,
      costo: 15.99
  },
  // Agrega aquí los otros 17 objetos de libros
];


// es un conjunto de patrones para tratrar el estado de la aplicación
//  son palabras claves que se usan para definir el comportamiento de la aplicación
// REDUCER: es una función que recibe el estado actual y una acción y devuelve el nuevo estado
const reducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_PRODUCT': 
    return [...state, action.payload]    
  }
}

// STORE: es el objeto que contiene el estado de la aplicación
export const store = createStore(reducer)

// ACTION: es un objeto que describe qué pasó
// DISPATCH: es la función que ejecuta la acción
// SUBSCRIBE: es la función que se ejecuta cada vez que el estado cambia