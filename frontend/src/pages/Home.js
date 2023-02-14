import { useEffect, useState } from 'react'
import { useCVsContext } from "../hooks/useCVsContext"

// Components and Controls
import PE from "../components/PE";
import EE from "../components/EE";
import GI from "../components/GI";
import ComboboxControl from '../components/ComboboxControl';
import EmptyExp from '../components/EmptyExp';
import EmptySch from '../components/EmptySch';

const Home = () => {
  const {cvs, dispatch} = useCVsContext()
  const [index, setIndex] = useState(0)
  const [error, setError] = useState(null)

  let expAdder = false

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

  const [jobTitle2, setJobTitle2] = useState(null)
  const [companyName2, setCompanyName2] = useState(null)
  const [companyLocation2, setCompanyLocation2] = useState(null)
  const [expFromMonth2, setExpFromMonth2] = useState(null)
  const [expFromYear2, setExpFromYear2] = useState(null)
  const [expToMonth2, setExpToMonth2] = useState(null)
  const [expToYear2, setExpToYear2] = useState(null)
  const [expHighlights2, setExpHighlights2] = useState(null)

  const [jobTitle3, setJobTitle3] = useState(null)
  const [companyName3, setCompanyName3] = useState(null)
  const [companyLocation3, setCompanyLocation3] = useState(null)
  const [expFromMonth3, setExpFromMonth3] = useState(null)
  const [expFromYear3, setExpFromYear3] = useState(null)
  const [expToMonth3, setExpToMonth3] = useState(null)
  const [expToYear3, setExpToYear3] = useState(null)
  const [expHighlights3, setExpHighlights3] = useState(null)

  const [jobTitle4, setJobTitle4] = useState(null)
  const [companyName4, setCompanyName4] = useState(null)
  const [companyLocation4, setCompanyLocation4] = useState(null)
  const [expFromMonth4, setExpFromMonth4] = useState(null)
  const [expFromYear4, setExpFromYear4] = useState(null)
  const [expToMonth4, setExpToMonth4] = useState(null)
  const [expToYear4, setExpToYear4] = useState(null)
  const [expHighlights4, setExpHighlights4] = useState(null)

  const [schoolName, setSchoolName] = useState(null)
  const [degree, setDegree] = useState(null)
  const [schoolLocation, setSchoolLocation] = useState(null)
  const [schFromMonth, setSchFromMonth] = useState(null)
  const [schFromYear, setSchFromYear] = useState(null)
  const [schToMonth, setSchToMonth] = useState(null)
  const [schToYear, setSchToYear] = useState(null)

  const [schoolName2, setSchoolName2] = useState(null)
  const [degree2, setDegree2] = useState(null)
  const [schoolLocation2, setSchoolLocation2] = useState(null)
  const [schFromMonth2, setSchFromMonth2] = useState(null)
  const [schFromYear2, setSchFromYear2] = useState(null)
  const [schToMonth2, setSchToMonth2] = useState(null)
  const [schToYear2, setSchToYear2] = useState(null)

  //Handle toggling expAdder for local use in this component
  const handleExpAdder = (bool) => {
    expAdder = bool
  }

  // Handle changing state of index from children components
  const handleComboChange = (index, value="") => {
    setIndex(index)
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

      case 'jobTitle2':
        setJobTitle2(value)
        break;

      case 'jobTitle3':
        setJobTitle3(value)
        break;

      case 'jobTitle4':
        setJobTitle4(value)
        break;

      case 'companyName':
        setCompanyName(value)
        break;
      
      case 'companyName2':
        setCompanyName2(value)
        break;
      
      case 'companyName3':
        setCompanyName3(value)
        break;

      case 'companyName4':
        setCompanyName4(value)
        break;

      case 'companyLocation':
        setCompanyLocation(value)
        break;

      case 'companyLocation2':
        setCompanyLocation2(value)
        break;
      
      case 'companyLocation3':
        setCompanyLocation3(value)
        break;
    
      case 'companyLocation4':
        setCompanyLocation4(value)
        break;

      case 'expFromMonth':
        setExpFromMonth(value)
        break;

      case 'expFromMonth2':
        setExpFromMonth2(value)
        break;

      case 'expFromMonth3':
        setExpFromMonth3(value)
        break;

      case 'expFromMonth4':
        setExpFromMonth4(value)
        break;
      
      case 'expFromYear':
        setExpFromYear(value)
        break;

      case 'expFromYear2':
        setExpFromYear2(value)
        break;

      case 'expFromYear3':
        setExpFromYear3(value)
        break;

      case 'expFromYear4':
        setExpFromYear4(value)
        break;

      case 'expToMonth':
        setExpToMonth(value)
        break;

      case 'expToMonth2':
        setExpToMonth2(value)
        break;

      case 'expToMonth3':
        setExpToMonth3(value)
        break;

      case 'expToMonth4':
        setExpToMonth4(value)
        break;

      case 'expToYear':
        setExpToYear(value)
        break;

      case 'expToYear2':
        setExpToYear2(value)
        break;

      case 'expToYear3':
        setExpToYear3(value)
        break;

      case 'expToYear4':
        setExpToYear4(value)
        break;
      
      case 'expHighlights':
        setExpHighlights(value)
        break;

      case 'expHighlights2':
        setExpHighlights2(value)
        break;

      case 'expHighlights3':
        setExpHighlights3(value)
        break;

      case 'expHighlights4':
        setExpHighlights4(value)
        break;

      case 'schoolName':
        setSchoolName(value)
        break;

      case 'schoolName2':
        setSchoolName2(value)
        break;
      
      case 'degree':
        setDegree(value)
        break;

      case 'degree2':
        setDegree2(value)
        break;
      
      case 'schoolLocation':
        setSchoolLocation(value)
        break;

      case 'schoolLocation2':
        setSchoolLocation2(value)
        break;

      case 'schFromMonth':
        setSchFromMonth(value)
        break;

      case 'schFromMonth2':
        setSchFromMonth2(value)
        break;

      case 'schFromYear':
        setSchFromYear(value)
        break;

      case 'schFromYear2':
        setSchFromYear2(value)
        break;

      case 'schToMonth':
        setSchToMonth(value)
        break;

      case 'schToMonth2':
        setSchToMonth2(value)
        break;

      case 'schToYear':
        setSchToYear(value)
        break;

      case 'schToYear2':
        setSchToYear2(value)
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
        statePHandler('first', json[index].first)
        statePHandler('last', json[index].last)
        statePHandler('title', json[index].title)
        statePHandler('profile', json[index].profile)
        statePHandler('email', json[index].email)
        statePHandler('phone', json[index].phone)
        statePHandler('linkedIn', json[index].linkedIn)
        statePHandler('gitHub', json[index].gitHub)
        statePHandler('website', json[index].website)

        statePHandler('jobTitle', json[index].jobTitle)
        statePHandler('companyName', json[index].companyName)
        statePHandler('companyLocation', json[index].companyLocation)
        statePHandler('expFromMonth', json[index].expFromMonth)
        statePHandler('expFromYear', json[index].expFromYear)
        statePHandler('expToMonth', json[index].expToMonth)
        statePHandler('expToYear', json[index].expToYear)
        statePHandler('expHighlights', json[index].expHighlights)

        statePHandler('jobTitle2', json[index].jobTitle2)
        statePHandler('companyName2', json[index].companyName2)
        statePHandler('companyLocation2', json[index].companyLocation2)
        statePHandler('expFromMonth2', json[index].expFromMonth2)
        statePHandler('expFromYear2', json[index].expFromYear2)
        statePHandler('expToMonth2', json[index].expToMonth2)
        statePHandler('expToYear2', json[index].expToYear2)
        statePHandler('expHighlights2', json[index].expHighlights2)

        statePHandler('jobTitle3', json[index].jobTitle3)
        statePHandler('companyName3', json[index].companyName3)
        statePHandler('companyLocation3', json[index].companyLocation3)
        statePHandler('expFromMonth3', json[index].expFromMonth3)
        statePHandler('expFromYear3', json[index].expFromYear3)
        statePHandler('expToMonth3', json[index].expToMonth3)
        statePHandler('expToYear3', json[index].expToYear3)
        statePHandler('expHighlights3', json[index].expHighlights3)

        statePHandler('jobTitle4', json[index].jobTitle4)
        statePHandler('companyName4', json[index].companyName4)
        statePHandler('companyLocation4', json[index].companyLocation4)
        statePHandler('expFromMonth4', json[index].expFromMonth4)
        statePHandler('expFromYear4', json[index].expFromYear4)
        statePHandler('expToMonth4', json[index].expToMonth4)
        statePHandler('expToYear4', json[index].expToYear4)
        statePHandler('expHighlights4', json[index].expHighlights4)

        statePHandler('schoolName', json[index].schoolName)
        statePHandler('degree', json[index].degree)
        statePHandler('schoolLocation', json[index].schoolLocation)
        statePHandler('schFromMonth', json[index].schFromMonth)
        statePHandler('schFromYear', json[index].schFromYear)
        statePHandler('schToMonth', json[index].schToMonth)
        statePHandler('schToYear', json[index].schToYear)

        statePHandler('schoolName2', json[index].schoolName2)
        statePHandler('degree2', json[index].degree2)
        statePHandler('schoolLocation2', json[index].schoolLocation2)
        statePHandler('schFromMonth2', json[index].schFromMonth2)
        statePHandler('schFromYear2', json[index].schFromYear2)
        statePHandler('schToMonth2', json[index].schToMonth2)
        statePHandler('schToYear2', json[index].schToYear2)
      }
    }

    fetchCVs()
  }, [])


  // Handles adding a new entry to the database
  const handleSubmit = async (e) => {
    const cv = { first, last, title, profile, email, phone, linkedIn, gitHub, website, 
                  jobTitle, companyName, companyLocation, expFromMonth, expFromYear, expToMonth, expToYear, expHighlights, 
                  jobTitle2, companyName2, companyLocation2, expFromMonth2, expFromYear2, expToMonth2, expToYear2, expHighlights2, 
                  jobTitle3, companyName3, companyLocation3, expFromMonth3, expFromYear3, expToMonth3, expToYear3, expHighlights3, 
                  jobTitle4, companyName4, companyLocation4, expFromMonth4, expFromYear4, expToMonth4, expToYear4, expHighlights4, 
                  schoolName, degree, schoolLocation, schFromMonth, schFromYear, schToMonth, schToYear, 
                  schoolName2, degree2, schoolLocation2, schFromMonth2, schFromYear2, schToMonth2, schToYear2, }

    if (cvs.find(item => item.title===cv.title)) {
      console.log('entry already exists in db, please change title')
      return
    }
    

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
      //setComboValue(json.title)                                       //set index state to 0 ***intentions here are to have the combobox auto select the first element in the list after a new entry is added but it is not working at the moment***
      dispatch({type: 'CREATE_CV', payload: json})      //update the global cvs variable with the new cv
    }
  }

  //Handles deleting an entry from the database
  const handleDelete = async () => {
    const response = await fetch('/api/cvs/' + cvs[index]._id, {
      method: 'DELETE'
    })
    const json = await response.json()
    

    if (response.ok) {
      dispatch({type: 'DELETE_CV', payload: json})
      handleComboChange(0, (cvs[0].title || ""))
    }
  }

  const handleUpdate = async () => {
    const cv = { first, last, title, profile, email, phone, linkedIn, gitHub, website, 
      jobTitle, companyName, companyLocation, expFromMonth, expFromYear, expToMonth, expToYear, expHighlights, 
      jobTitle2, companyName2, companyLocation2, expFromMonth2, expFromYear2, expToMonth2, expToYear2, expHighlights2, 
      jobTitle3, companyName3, companyLocation3, expFromMonth3, expFromYear3, expToMonth3, expToYear3, expHighlights3, 
      jobTitle4, companyName4, companyLocation4, expFromMonth4, expFromYear4, expToMonth4, expToYear4, expHighlights4, 
      schoolName, degree, schoolLocation, schFromMonth, schFromYear, schToMonth, schToYear, 
      schoolName2, degree2, schoolLocation2, schFromMonth2, schFromYear2, schToMonth2, schToYear2, }
    
    console.log(`cvs[index]._id: ${cvs[index]._id}`)
    console.log('cv value')
    console.log(cv)
    const response = await fetch('/api/cvs/' + cvs[index]._id, {
      method: 'PATCH',
      body: JSON.stringify(cv),                         //set the body of the post request equal to our cv object in JSON format
      headers: {                                        //set the header of the post request
        'Content-Type': 'application/json'                //to let the request know we're sending JSON
      }
    })

    const json = await response.json()  

    if (!response.ok) {                               //if we don't get an 'ok' response
      setError(json.error)                              //then change our error state equal to the response error
    }

    if(response.ok) {                                 //if we DO get an 'ok' response
      setError(null)                                    //make sure our error state is set back to null
      console.log(json)                                                            //set index state to 0 ***intentions here are to have the combobox auto select the first element in the list after a new entry is added but it is not working at the moment***
      dispatch({type: 'UPDATE_CV', payload: cv})
            //update the global cvs variable with the new cv

      statePHandler('first', json.first)
      statePHandler('last', json.last)
      statePHandler('title', json.title)
      statePHandler('profile', json.profile)
      statePHandler('email', json.email)
      statePHandler('phone', json.phone)
      statePHandler('linkedIn', json.linkedIn)
      statePHandler('gitHub', json.gitHub)
      statePHandler('website', json.website)

      statePHandler('jobTitle', json.jobTitle)
      statePHandler('companyName', json.companyName)
      statePHandler('companyLocation', json.companyLocation)
      statePHandler('expFromMonth', json.expFromMonth)
      statePHandler('expFromYear', json.expFromYear)
      statePHandler('expToMonth', json.expToMonth)
      statePHandler('expToYear', json.expToYear)
      statePHandler('expHighlights', json.expHighlights)

      statePHandler('jobTitle2', json.jobTitle2)
      statePHandler('companyName2', json.companyName2)
      statePHandler('companyLocation2', json.companyLocation2)
      statePHandler('expFromMonth2', json.expFromMonth2)
      statePHandler('expFromYear2', json.expFromYear2)
      statePHandler('expToMonth2', json.expToMonth2)
      statePHandler('expToYear2', json.expToYear2)
      statePHandler('expHighlights2', json.expHighlights2)

      statePHandler('jobTitle3', json.jobTitle3)
      statePHandler('companyName3', json.companyName3)
      statePHandler('companyLocation3', json.companyLocation3)
      statePHandler('expFromMonth3', json.expFromMonth3)
      statePHandler('expFromYear3', json.expFromYear3)
      statePHandler('expToMonth3', json.expToMonth3)
      statePHandler('expToYear3', json.expToYear3)
      statePHandler('expHighlights3', json.expHighlights3)

      statePHandler('jobTitle4', json.jobTitle4)
      statePHandler('companyName4', json.companyName4)
      statePHandler('companyLocation4', json.companyLocation4)
      statePHandler('expFromMonth4', json.expFromMonth4)
      statePHandler('expFromYear4', json.expFromYear4)
      statePHandler('expToMonth4', json.expToMonth4)
      statePHandler('expToYear4', json.expToYear4)
      statePHandler('expHighlights4', json.expHighlights4)

      statePHandler('schoolName', json.schoolName)
      statePHandler('degree', json.degree)
      statePHandler('schoolLocation', json.schoolLocation)
      statePHandler('schFromMonth', json.schFromMonth)
      statePHandler('schFromYear', json.schFromYear)
      statePHandler('schToMonth', json.schToMonth)
      statePHandler('schToYear', json.schToYear)

      statePHandler('schoolName2', json.schoolName2)
      statePHandler('degree2', json.degree2)
      statePHandler('schoolLocation2', json.schoolLocation2)
      statePHandler('schFromMonth2', json.schFromMonth2)
      statePHandler('schFromYear2', json.schFromYear2)
      statePHandler('schToMonth2', json.schToMonth2)
      statePHandler('schToYear2', json.schToYear2)
    }
  }

  const handleAddExp = () => {

    console.log('entered handleAddExp')
    
    if (cvs) {
      if (cvs[index].jobTitle==="" || cvs[index].jobTitle === null) {
        statePHandler('jobTitle', "Enter Job Title")
        statePHandler('companyName', "Enter Company Name ")
        statePHandler('expHighlights', "Enter Highlights and Accomplishments")
        statePHandler('expFromMonth', "December")
        statePHandler('expFromYear', "2023")
        statePHandler('expToMonth', 'December')
        statePHandler('expToYear', "2023")
      } else if (cvs[index].jobTitle2==="" || cvs[index].jobTitle2 === null) {
        console.log('Adding second element')
        statePHandler('jobTitle2', "Enter Job Title")
        statePHandler('companyName2', "Enter Company Name ")
        statePHandler('expHighlights2', "Enter Highlights and Accomplishments")
        statePHandler('expFromMonth2', "December")
        statePHandler('expFromYear2', "2023")
        statePHandler('expToMonth2', 'December')
        statePHandler('expToYear2', "2023")
      }
    }
    
    console.log('exiting handleAddExp')
  }

  return (
    <div className="home">
      {cvs && <ComboboxControl handleComboChange={handleComboChange} index={index} />}
      {error && <div className="error">{error}</div>}
      <div className="button-container">
        <button>New</button>
        <button onClick={handleUpdate}>Save</button>
        <button onClick={handleSubmit}>Add</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <p />
      {cvs && <GI i={index} statePHandler={statePHandler} handleComboChange={handleComboChange} />}
      <p />
      {(cvs && cvs[index].jobTitle && <PE i={index} statePHandler={statePHandler} instance={"exp1"} />) || handleExpAdder(true)}
      {(cvs && cvs[index].jobTitle2 && <PE i={index} statePHandler={statePHandler} instance={"exp2"} />) || handleExpAdder(true)}
      {(cvs && cvs[index].jobTitle3 && <PE i={index} statePHandler={statePHandler} instance={"exp3"} />) || handleExpAdder(true)}
      {(cvs && cvs[index].jobTitle4 && <PE i={index} statePHandler={statePHandler} instance={"exp4"} />) || handleExpAdder(true)}
      {expAdder && <EmptyExp handleAddExp={handleAddExp} />}
      <p />
      {cvs && <EE i={index} statePHandler={statePHandler} instance={"school1"} />}
      {(cvs && cvs[index].schoolName2 && <EE i={index} statePHandler={statePHandler} instance={"school2"} />) || <EmptySch />}
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