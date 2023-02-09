// See the Net Ninja MERN Stack Tutorial #11 for reference at https://youtu.be/NKsVV7wJcDM start @ 16:30

import { CVsContext } from '../context/CVContext'
import { useContext } from 'react'

export const useCVsContext = () => {
  const context = useContext(CVsContext)

  if (!context) {
    throw Error('useCVsContext must be used inside a CVsContextProvider')
  }

  return context
}