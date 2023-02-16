import uniqid from "uniqid"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCVsContext } from "../hooks/useCVsContext"
import { useIndexContext } from "../hooks/useIndexContext"

const EditCV = () => {
  const { cvs, cvsDispatch } = useCVsContext()
  const { index } = useIndexContext()

  const [title, setTitle] = useState(cvs[index].title)
  const [name, setName] = useState(cvs[index].name)
  const [schools, setSchools] = useState(cvs[index].schools)
    const [schoolName, setSchoolName] = useState('')
    const [schoolLocation, setSchoolLocation] = useState('')
    const [schoolDegree, setSchoolDegree] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate();

  const navigateDisplayPage = () => {
    navigate("/")
  }

  const handleAddSchool = (e) => {
    e.preventDefault()

    setSchools([...schools, {name: schoolName, location: schoolLocation, degree: schoolDegree}])
    setSchoolName('')
    setSchoolLocation('')
    setSchoolDegree('')
  }

  const handleRemoveSchool = (e) => {
    e.preventDefault()
    const remIndex = e.target.getAttribute("index")
    const newArr = schools

    const returnArr = newArr.splice(remIndex, newArr.length - remIndex)
    returnArr.shift()

    setSchools([...newArr, ...returnArr])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const cv = {title, name, schools}

    const response = await fetch('/api/cvs/' + cvs[index]._id, {
      method: 'PATCH',
      body: JSON.stringify(cv),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const json = await response.json

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setTitle('')
      setName('')
      setSchools([])
      setError(null)

      cvsDispatch({type: 'UPDATE_CV', payload: json})
      console.log(index)
      navigateDisplayPage()
    }
  }

  return ( 
    <form className="new-cv-form" onSubmit={handleSubmit}>
      <h3>Edit New CV</h3>

      {error && <div className="form-error">{error}</div>}

      <label>Name:</label>
      <input 
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <label>Title:</label>
      <input 
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <div className="school-entry">
        <input type="text" value={schoolName} placeholder="School Name" onChange={(e) => setSchoolName(e.target.value)} />
        <input type="text" value={schoolLocation} placeholder="Location" onChange={(e) => setSchoolLocation(e.target.value)} />
        <input type="text" value={schoolDegree} placeholder="Degree Earned" onChange={(e) => setSchoolDegree(e.target.value)} />
        <button onClick={handleAddSchool}>Add</button>
      </div>

      <button>Save CV</button>

      <div className="test-display">
        {schools && schools.map((school, i) => {
          return (
            <div key={uniqid()} className="school-container">
              <div>{school.name}</div>
              <span index={i} className="button-span" onClick={handleRemoveSchool}>remove</span>
            </div>
          )
        })}
      </div>
    </form>
  );
}
 
export default EditCV;