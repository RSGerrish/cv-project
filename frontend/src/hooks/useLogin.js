import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('https://cv-project-ten.vercel.app:4005' + '/api/user/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // Save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // Update the AuthContext
      dispatch({type: 'LOGIN', payload: json})

      setIsLoading(false)
    }
  }

  return { login, isLoading, error }
}