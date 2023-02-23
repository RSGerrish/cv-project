import { useAuthContext } from "./useAuthContext"
import { useCVsContext } from "./useCVsContext"

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { cvsDispatch } = useCVsContext()

  const logout = () => {

    // Remove user from storage
    localStorage.removeItem('user')

    // Dispatch logout action
    dispatch({type: 'LOGOUT'})
    cvsDispatch({type: 'SET_CVS', payload: null})
  }

  return { logout }
}