import { useEffect, useState } from 'react'
import { useCVsContext } from "../hooks/useCVsContext"

// Components and Controls
// import PE from "../components/PE";
// import EE from "../components/EE";
import GI from "../components/GI";

const Home = () => {
  const {cvs, dispatch} = useCVsContext()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const fetchCVs = async () => {
      const response = await fetch('/api/cvs')  // <-- Currently using CORS for development. Will need to explicitly
      const json = await response.json()        // the proper address and port to the server at production (ex. 'http://localhost:4005/api/cvs')

      if (response.ok) {
        dispatch({type: 'SET_CVS', payload: json})
      }

      setIndex(0)
    }

    fetchCVs()
  }, [])

  return (
    <div className="home">
      <select className={"combobox"} autoFocus onChange={(e) => {
        console.log(e.target.selectedIndex)
        setIndex(e.target.selectedIndex)
      }}>
        {cvs && cvs.map((cvInstance) => (
        <option key={cvInstance._id}>{cvInstance.title}</option>
      ))}
      </select>
      <p />
      {cvs && <GI i={index} />}
    </div>

    /*
    {<div><p>Single CV</p><GI index={index} /></div>}
    {/* 
    <hr />
    <PE />
    <hr />
    <EE />
    */
  )
}

export default Home;