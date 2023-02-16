import { useContext } from "react"
import { IndexContext } from "../context/IndexContext"

export const useIndexContext = () => {
  const context = useContext(IndexContext)

  if (!context) {
    throw Error('useIndexContext must be used inside an IndexContextProvider')
  }

  return context
}