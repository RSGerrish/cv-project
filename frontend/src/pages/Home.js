import { useEffect } from "react"
import { useCVsContext } from "../hooks/useCVsContext"
import { useIndexContext } from "../hooks/useIndexContext"
import { useAuthContext } from "../hooks/useAuthContext"

// Components
import CVList from "../components/CVList"
import CVDisplay from "../components/CVDisplay"

const Home = () => {
  const {cvs, cvsDispatch} = useCVsContext()
  const {index} = useIndexContext()
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchCVs = async () => {
      const response = await fetch('/api/cvs', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })  // This fetch request will need to point explicitly to the full endpoint address (ie. 'https://mongodb.com/PORT:xxx')
      const json = await response.json()

      if (response.ok) {
        cvsDispatch({type: 'SET_CVS', payload: json})
      }
    }

    if(user) {
      fetchCVs()
    }
  }, [user])

  return ( 
    <div className="home">
      <div className="cvs-display">
        {cvs && <CVList cvs={cvs} />}
        {cvs && <CVDisplay cv={cvs[index]} />}
      </div>
    </div>
   );
}
 
export default Home;