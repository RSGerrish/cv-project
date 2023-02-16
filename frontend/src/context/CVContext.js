import { createContext, useReducer } from 'react'

export const CVsContext = createContext()

export const cvsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CVS':
      return {
        cvs: action.payload
      }
    case 'CREATE_CV':
      return {
        cvs: [action.payload, ...state.cvs]
      }
    case 'DELETE_CV':
      return {
        cvs: state.cvs.filter((cv) => cv._id !== action.payload._id)
      }
    case 'UPDATE_CV':
      let updatedArr = state.cvs
      let remIndex 

      updatedArr.filter((item, i) => {
        remIndex = i
        return item._id === action.payload._id
      })

      updatedArr[remIndex] = action.payload

      return {
        cvs: updatedArr
      }
    default:
      return state
  }
}

export const CVsContextProvider = ({ children }) => {
  const [state, cvsDispatch] = useReducer(cvsReducer, {
    cvs: null
  })

  return ( 
    <CVsContext.Provider value={{...state, cvsDispatch}}>
      { children }
    </CVsContext.Provider>
   );
}