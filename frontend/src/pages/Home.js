import { useEffect, useState } from 'react'
import { useCVsContext } from "../hooks/useCVsContext"

// Components and Controls
import PE from "../components/PE";
import EE from "../components/EE";
import GI from "../components/GI";
import ComboboxControl from '../components/ComboboxControl';

const Home = () => {
  const {cvs, dispatch} = useCVsContext()
  const [index, setIndex] = useState(0)
  const [indexValue, setIndexValue] = useState(0)
  const [error, setError] = useState(null)

  const [first, setFirst] = useState(null)
  const [last, setLast] = useState(null)
  const [title, setTitle] = useState(null)
  const [profile, setProfile] = useState(null)
  const [email, setEmail] = useState(null)
  const [phone, setPhone] = useState(null)
  const [linkedIn, setLinkedIn] = useState(null)
  const [gitHub, setGitHub] = useState(null)
  const [website, setWebsite] = useState(null)

  const [jobTitle, setJobTitle] = useState(null)
  const [companyName, setCompanyName] = useState(null)
  const [companyLocation, setCompanyLocation] = useState(null)
  const [expFromMonth, setExpFromMonth] = useState(null)
  const [expFromYear, setExpFromYear] = useState(null)
  const [expToMonth, setExpToMonth] = useState(null)
  const [expToYear, setExpToYear] = useState(null)
  const [expHighlights, setExpHighlights] = useState(null)

  const [schoolName, setSchoolName] = useState(null)
  const [degree, setDegree] = useState(null)
  const [schoolLocation, setSchoolLocation] = useState(null)
  const [schFromMonth, setSchFromMonth] = useState(null)
  const [schFromYear, setSchFromYear] = useState(null)
  const [schToMonth, setSchToMonth] = useState(null)
  const [schToYear, setSchToYear] = useState(null)

  // Handle changing state of index from children components
  const handleIndexState = (value) => {
    setIndex(value)
  }

  // One function to handle all possible data-related state changes from children
  const statePHandler = ((stateName, value) => {
    switch(stateName) {
      case 'first':
        setFirst(value)
        break;
      
      case 'last':
        setLast(value)
        break;
      
      case 'title':
        setTitle(value)
        break;

      case 'profile':
        setProfile(value)
        break;

      case 'email':
        setEmail(value)
        break;

      case 'phone':
        setPhone(value)
        break;

      case 'linkedIn':
        setLinkedIn(value)
        break;

      case 'gitHub':
        setGitHub(value)
        break;

      case 'website':
        setWebsite(value)
        break;

      case 'jobTitle':
        setJobTitle(value)
        break;

      case 'companyName':
        setCompanyName(value)
        break;

      case 'companyLocation':
        setCompanyLocation(value)
        break;

      case 'expFromMonth':
        setExpFromMonth(value)
        break;
      
      case 'expFromYear':
        setExpFromYear(value)
        break;

      case 'expToMonth':
        setExpToMonth(value)
        break;

      case 'expToYear':
        setExpToYear(value)
        break;
      
      case 'expHighlights':
        setExpHighlights(value)
        break;

      case 'schoolName':
        setSchoolName(value)
        break;
      
      case 'degree':
        setDegree(value)
        break;
      
      case 'schoolLocation':
        setSchoolLocation(value)
        break;

      case 'schFromMonth':
        setSchFromMonth(value)
        break;

      case 'schFromYear':
        setSchFromYear(value)
        break;

      case 'schToMonth':
        setSchToMonth(value)
        break;

      case 'schToYear':
        setSchToYear(value)
        break;
      
      default:
        break;
    }
  })

  // Fire off only when the Home component is loaded
  useEffect(() => {
    const fetchCVs = async () => {
      const response = await fetch('/api/cvs')  // <-- Currently using CORS for development. Will need to explicitly define
      const json = await response.json()        // the proper address and port to the server at production (ex. 'http://localhost:4005/api/cvs')

      if (response.ok) {
        dispatch({type: 'SET_CVS', payload: json})
      }
    }

    fetchCVs()
  }, [])

  // Handles adding a new entry to the database
  const handleSubmit = async (e) => {
    const cv = { first, last, title, profile, email, phone, linkedIn, gitHub, website, jobTitle, companyName, companyLocation, expFromMonth, expFromYear, expToMonth, expToYear, expHighlights, schoolName, degree, schoolLocation, schFromMonth, schFromYear, schToMonth, schToYear }

    const response = await fetch('/api/cvs', {        //fetch request for all cvs
      method: 'POST',                                   //let the request know we want to post
      body: JSON.stringify(cv),                         //set the body of the post request equal to our cv object in JSON format
      headers: {                                        //set the header of the post request
        'Content-Type': 'application/json'                //to let the request know we're sending JSON
      }
    })

    const json = await response.json()                //wait for our response from the server

    if (!response.ok) {                               //if we don't get an 'ok' response
      setError(json.error)                              //then change our error state equal to the response error
    }

    if(response.ok) {                                 //if we DO get an 'ok' response
      setError(null)                                    //make sure our error state is set back to null
      console.log('new cv added')                       
      setIndex(0)                                       //set index state to 0 ***intentions here are to have the combobox auto select the first element in the list after a new entry is added but it is not working at the moment***
      setIndexValue(json.title)                         //set indexValue state to match the response title
      console.log(json.title)
      dispatch({type: 'CREATE_CV', payload: json})      //update the global cvs variable with the new cv
    }
  }

  return (
    <div className="home">
      {cvs && <ComboboxControl handleIndexState={handleIndexState} indexValue={indexValue} />}
      {error && <div className="error">{error}</div>}
      <div className="button-container">
        <button>New</button>
        <button>Save</button>
        <button onClick={handleSubmit}>Add</button>
      </div>
      <p />
      {cvs && <GI i={index} statePHandler={statePHandler} />}
      <p />
      {cvs && <PE i={index} statePHandler={statePHandler} />}
      <p />
      {cvs && <EE i={index} statePHandler={statePHandler} />}
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