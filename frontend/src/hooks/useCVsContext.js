import { useContext } from 'react'
import { CVsContext } from '../context/CVContext'


export const useCVsContext = () => {
  const context = useContext(CVsContext)

  if (!context) {
    throw Error('useCVsContext must be used inside a CVsContextProvider')
  }

  return context
}