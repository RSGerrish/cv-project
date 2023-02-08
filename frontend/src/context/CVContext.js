import { createContext, useReducer } from 'react'

export const CVsContext = createContext()         // Make a new context, store it in CVsContext and export it so we can use it in another file


// cvsReducer is the function that runs each time a request (dispatch) is made to the server
  // it has the state and action values which make it unique from useState
  // state is the previous value of the database
  // action is the new data entry that also has the request type (action.type) attached to it
export const cvsReducer = (state, action) => {    //state = reliable previous state value and action=action type passed in from dispatch()
  switch (action.type) {              // Switch case to handle which action to perform
    case 'SET_CVS':                     // If action type is 'SET_CVS' (get all CVs) then
      return {
        cvs: action.payload               // Return the new list of all objects in db
      }
    case 'CREATE_CV':                   // If action type is 'CREATE_CV' (create new cv entry) then
      return {
        cvs: [action.payload, ...state.cvs] // Return the newly added entry (action.payload) and all the rest of the previous entries (...state.cvs)
      }
    default:
      return state
  }
}


// CVsContextProvider component used to wrap the entire App effectively giving 
// every child access to state and dispatch of 'cvs'
export const CVsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cvsReducer, {    // useReducer is much like useState but we get to 
    cvs: null                                             // invoke a function (cvsReducer) w/ special attributes to handle state changes
  })                                                      // we are also returning a state value which is an object with with one key of 'cvs' and a value of null
                                                          // IMPORTANT - to change the state of our object of cvs, we need to invoke dispatch which can be done in 
  return (                                                // all components by importing useCVsContext.js and declaring const {cvs, dispatch} = useCVsContext() in
    <CVsContext.Provider value={{...state, dispatch}} >   {/*the child component where state needs to be updated*/}
      { children }
    </CVsContext.Provider>
  )
}