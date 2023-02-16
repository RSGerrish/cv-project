import { createContext, useReducer } from 'react'

export const IndexContext = createContext()

export const indexReducer = (state, action) => {
  switch (action.type) {
    case 'SET_INDEX':
      return {
        index: action.payload
      }
    default:
      return state
  }
}

export const IndexContextProvider = ({ children }) => {
  const [state, indexDispatch] = useReducer(indexReducer, {
    index: 0
  })

  return ( 
    <IndexContext.Provider value={{...state, indexDispatch}}>
      { children }
    </IndexContext.Provider>
   );
}