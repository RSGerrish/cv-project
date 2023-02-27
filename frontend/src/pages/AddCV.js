import uniqid from "uniqid"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCVsContext } from "../hooks/useCVsContext"
import { useAuthContext } from "../hooks/useAuthContext"
import { useIndexContext } from "../hooks/useIndexContext"

const AddCV = () => {
  const { cvs, cvsDispatch } = useCVsContext()
  const { user } = useAuthContext()
  const { indexDispatch } = useIndexContext()

  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [profile, setProfile] = useState('')

  const [website, setWebsite] = useState('')
  const [github, setGithub] = useState('')
  const [linkedin, setLinkedin] = useState('')

  const [experience, setExperience] = useState([])
    const [jobtitle, setJobtitle] = useState('')
    const [companyname, setCompanyname] = useState('')
    const [highlights, setHighlights] = useState('')
    const [expdatefrom, setExpDatefrom] = useState('')
    const [expdateto, setExpDateto] = useState('')

  const [schools, setSchools] = useState([])
    const [schoolName, setSchoolName] = useState('')
    const [schoolLocation, setSchoolLocation] = useState('')
    const [schoolDegree, setSchoolDegree] = useState('')
    const [schdatefrom, setSchDatefrom] = useState('')
    const [schdateto, setSchDateto] = useState('')

  const [skills, setSkills] = useState([])
    const [skill, setSkill] = useState('')

  const [references, setReferences] = useState([])
    const [refname, setRefname] = useState('')
    const [refphone, setRefphone] = useState('')
    const [refrelation, setRefrelation] = useState('')

  const [error, setError] = useState('')

  const navigate = useNavigate();

  const navigateDisplayPage = () => {
    navigate("/")
  }

  const handleAddJob = (e) => {
    e.preventDefault()

    setExperience([...experience, {jobtitle: jobtitle, companyname: companyname, highlights: highlights, datefrom: expdatefrom, dateto: expdateto}])
    setJobtitle('')
    setCompanyname('')
    setHighlights('')
    setExpDatefrom('')
    setExpDateto('')
  }

  const handleRemoveJob = (e) => {
    e.preventDefault()
    const remIndex = e.target.getAttribute("index")
    const newArr = experience

    const returnArr = newArr.splice(remIndex, newArr.length - remIndex)
    returnArr.shift()

    setExperience([...newArr, ...returnArr])
  }

  const handleAddSchool = (e) => {
    e.preventDefault()

    setSchools([...schools, {name: schoolName, location: schoolLocation, degree: schoolDegree, datefrom: schdatefrom, dateto: schdateto}])
    setSchoolName('')
    setSchoolLocation('')
    setSchoolDegree('')
    setSchDatefrom('')
    setSchDateto('')
  }

  const handleRemoveSchool = (e) => {
    e.preventDefault()

    const remIndex = e.target.getAttribute("index")
    const newArr = schools

    const returnArr = newArr.splice(remIndex, newArr.length - remIndex)
    returnArr.shift()

    setSchools([...newArr, ...returnArr])
  }

  const handleAddSkill = (e) => {
    if (e) e.preventDefault()

    setSkills([...skills, skill])
    setSkill('')
  }

  const handleAddSkillKP = (e) => {
    if (e.key.length === 1) {
      setSkill(e.target.value + e.key);
      console.log(e);
    } 
    else if (e.key === 'Enter') {
      e.preventDefault()
      handleAddSkill()
    } 
    else if (e.key === 'Backspace' || 'Delete') {
      const transformArr = e.target.value.split('')
      console.log(e)
      if (e.target.selectionEnd != e.target.selectionStart) { 
        transformArr.splice(e.target.selectionStart, e.target.selectionEnd - e.target.selectionStart)
        setSkill(transformArr.join(''))
      } else if (e.key === 'Backspace') {
        transformArr.splice(e.target.selectionStart - 1, 1)
        setSkill(transformArr.join(''))
      } else if (e.key === 'Delete') {
        transformArr.splice(e.target.selectionStart, 1)
        setSkill(transformArr.join(''))
      }
    }
  }

  const handleRemoveSkill = (e) => {
    e.preventDefault()

    const remIndex = e.target.getAttribute("index")
    const newArr = skills

    const returnArr = newArr.splice(remIndex, newArr.length - remIndex)
    returnArr.shift()

    setSkills([...newArr, ...returnArr])
  }

  const handleAddReference = (e) => {
    e.preventDefault()

    setReferences([...references, {refname: refname, refphone: refphone, refrelation: refrelation}])
    setRefname('')
    setRefphone('')
    setRefrelation('')
  }

  const handleRemoveReference = (e) => {
    e.preventDefault()

    const remIndex = e.target.getAttribute("index")
    const newArr = references

    const returnArr = newArr.splice(remIndex, newArr.length - remIndex)
    returnArr.shift()

    setReferences([...newArr, ...returnArr])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!user) {
      setError('You must be logged in')
      return
    }

    const cv = {address, phone, email, title, name, profile, website, github, linkedin, experience, schools, skills, references}
    
    const response = await fetch('https://cv-creator.onrender.com:4005' + '/api/cvs/', {
      method: 'POST',
      body: JSON.stringify(cv),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })

    const json = await response.json

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setAddress('')
      setPhone('')
      setEmail('')
      setTitle('')
      setName('')
      setProfile('')
      setWebsite('')
      setGithub('')
      setLinkedin('')
      setExperience([])
      setSchools([])
      setSkills([])
      setReferences([])
      setError(null)

      cvsDispatch({type: 'CREATE_CV', payload: json})
      indexDispatch({type: 'SET_INDEX', payload: cvs.length})
      navigateDisplayPage()
    }
  }

  return ( 
    <form className="new-cv-form" onSubmit={handleSubmit}>
      <div className="title-container">
        <div className="title-position">
          <div className="add-title"><h1>Add a New CV</h1></div>
          <button>Save</button>
        </div>
      </div>
      <div className="add-container">
        <div className="add-positioner">
          {error && <div className="form-error">{error}</div>}

          <div className="contact-container">
            <input 
              type="text"
              className="address-input"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              placeholder="Your Address"
            />

            <div className="phonemail-container">
              <input 
                type="tel"
                className="tel-input"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                placeholder="555-555-5555"
              />

              <input 
                type="email"
                className="email-input"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="intro-container">
            <input 
              type="text"
              className="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Your Name"
              required={true}
            />

            <input 
              type="text"
              className="prof-title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="Your Professional Title"
            />

            <textarea 
              className="profile-input"
              onChange={(e) => setProfile(e.target.value)}
              value={profile}
              placeholder="Include a short, general bio on yourself here"
            />
          </div>

          <hr />

          <div className="socials-entry">
            <input className="social-input" type="text" value={website} placeholder="Website Address" onChange={(e) => setWebsite(e.target.value)} />
            <input className="social-input" type="text" value={github} placeholder="Github Address" onChange={(e) => setGithub(e.target.value)} />
            <input className="social-input" type="text" value={linkedin} placeholder="LinkedIn Address" onChange={(e) => setLinkedin(e.target.value)} />
          </div>

          <hr />

          <div className="experience-entry">
            <div className="exp-titdur-container">
              <div className="exp-title-container">
                <input className="pos-title" type="text" value={jobtitle} placeholder="Position Title" onChange={(e) => setJobtitle(e.target.value)} />
                <input className="company-name" type="text" value={companyname} placeholder="Company Name" onChange={(e) => setCompanyname(e.target.value)} />
              </div>
              <div className="exp-duration-container">
                <input className="date-input" type="date" value={expdatefrom} placeholder="Degree Earned" onChange={(e) => setExpDatefrom(e.target.value)} />
                <input className="date-input" type="date" value={expdateto} placeholder="Degree Earned" onChange={(e) => setExpDateto(e.target.value)} />
              </div>
            </div>
            <textarea className="highlights-input" value={highlights} placeholder="Highlight responsibilities and accomplishments here" onChange={(e) => setHighlights(e.target.value)} />
            <button className="add-btn" onClick={handleAddJob}>Add</button>
          </div>

          <div className="experience-entry-display">
            {experience && experience.map((job, i) => {
              return (
                <div key={uniqid()} className="job-container">
                  <div className="job-element">
                    <div>{job.jobtitle}</div>
                    <span index={i} className="material-symbols-outlined" onClick={handleRemoveJob}>delete</span>
                  </div>
                </div>
              )
            })}
          </div>

          <hr />

          <div className="school-entry">
            <div className="school-container">
              <div className="sch-name-container">
                <input className="schoolname" type="text" value={schoolName} placeholder="School Name" onChange={(e) => setSchoolName(e.target.value)} />
                <input className="schoollocation" type="text" value={schoolLocation} placeholder="Location" onChange={(e) => setSchoolLocation(e.target.value)} />
                <input className="degree" type="text" value={schoolDegree} placeholder="Degree Earned" onChange={(e) => setSchoolDegree(e.target.value)} />
              </div>
              <div className="sch-duration-container">
                <input className="date-input" type="date" value={schdatefrom} placeholder="Degree Earned" onChange={(e) => setSchDatefrom(e.target.value)} />
                <input className="date-input" type="date" value={schdateto} placeholder="Degree Earned" onChange={(e) => setSchDateto(e.target.value)} />
              </div>
            </div>
            <div className="sch-btn-spacer"></div><button className="add-btn" onClick={handleAddSchool}>Add</button>
          </div>
          <div className="school-entry-display">
            {schools && schools.map((school, i) => {
              return (
                <div key={uniqid()} className="school-display-container">
                  <div>{school.name}</div>
                  <span index={i} className="material-symbols-outlined" onClick={handleRemoveSchool}>delete</span>
                </div>
              )
            })}
          </div>

          <hr />

          <div className="skills-entry">
            <input className="skill" type="text" value={skill} placeholder="Add skills, certifications and/or general achievements here (ie. LEAN Certified, etc...)" onKeyDown={handleAddSkillKP} />

            <button className="add-btn" onClick={handleAddSkill}>Add</button>
          </div>

          <div className="skills-entry-display">
            {skills && skills.map((skill, i) => {
              return (
                <div key={uniqid()} className="skill-container">
                  <div className='skill-label'>{skill}</div>
                  <span index={i} className="material-symbols-outlined" onClick={handleRemoveSkill}>delete</span>
                </div>
              )
            })}
          </div>

          <hr />

          <div className="references-entry">
            <input className="ref-name" type="text" value={refname} placeholder="Reference Name" onChange={(e) => setRefname(e.target.value)} />
            <input className="ref-phone" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={refphone} placeholder="Phone Number" onChange={(e) => setRefphone(e.target.value)} />
            <input className="ref-relation" type="text" value={refrelation} placeholder="Relationship" onChange={(e) => setRefrelation(e.target.value)} />

            <button className="add-btn" onClick={handleAddReference}>Add</button>
          </div>

          <div className="reference-entry-display">
            {references && references.map((reference, i) => {
              return (
                <div key={uniqid()} className="reference-container">
                  <div className='reference-label'>{reference.refname}</div>
                  <div className="reference-phone">{reference.refphone}</div>
                  <div className="reference-relation">{reference.refrelation}</div>
                  <span index={i} className="material-symbols-outlined" onClick={handleRemoveReference}>delete</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </form>
  );
}
 
export default AddCV;