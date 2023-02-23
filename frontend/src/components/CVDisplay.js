import uniqid from 'uniqid'
import { useNavigate } from "react-router-dom"
import { useCVsContext } from '../hooks/useCVsContext'
import { useIndexContext } from '../hooks/useIndexContext'
import { useAuthContext } from "../hooks/useAuthContext"

const CVDisplay = ({ cv }) => {
  const { cvsDispatch } = useCVsContext()
  const { index, indexDispatch } = useIndexContext()
  const { user } = useAuthContext()
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!user) {
      return
    }

    if (!cv) {
      return
    }

    const response = await fetch('/api/cvs/' + cv._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      indexDispatch({type: 'SET_INDEX', payload: index-1})
      console.log(`index - 1: ${index-1}`)
      cvsDispatch({type: 'DELETE_CV', payload: json})
    }
  }

  const handleEdit = async () => {
    navigate('/EditCV')
  }

  return ( 
    <div className="cv-display">
      {cv && <div className="cv-display-container">
        <div className="cv-controls">
          <span className="button-span" onClick={handleDelete}>delete</span>
          <span className="button-span" onClick={handleEdit}>edit</span>
        </div>
        <div className="contact-container">
          <div className="address">{cv.address}</div>
          <div className="phonemail-container">
            <div className="phone">{cv.phone}</div>
            <div className="email">{cv.email}</div>
          </div>
        </div>

        <h1 className="name">{cv.name}</h1>
        <h2 className="prof-title">{cv.title}</h2>
        <h3 className="profile">{cv.profile}</h3>
        <hr />
        <div className="portfolio-container">
          <h4 className="portfolio-item">{cv.website}</h4>
          <h4 className="portfolio-item">{cv.github}</h4>
          <h4 className="portfolio-item">{cv.linkedin}</h4>
        </div>
        <hr />
        {cv.experience && cv.experience.map((job) => {
          return (
            <div key={uniqid()} className="experience-container">
              <div className="exp-titdur-container">
                <div className="exp-title-container">
                  <h3 className="pos-title">{job.jobtitle}</h3>
                  <h4 className="company-name">{job.companyname}</h4>
                </div>
                <div className="exp-duration-container">
                  <span className="exp-date">{job.datefrom}</span>
                  <span className="exp-date">to</span>
                  <span className="exp-date">{job.dateto}</span>
                </div>
              </div>
              <div className="highlights">{job.highlights}</div>
            </div>
          )
        })}
        <hr />
        {cv.schools && cv.schools.map((school) => {
          return (
            <div key={uniqid()} className="school-container">
              <div className="sch-name-container">
                <h3 className="school-name">{school.name}</h3>
                <div className="school-location">{school.location}</div>
                <div className="school-degree">{school.degree}</div>
              </div>
              <div className="sch-duration-container">
                <span className="exp-date">{school.datefrom}</span>
                <span className="exp-date">to</span>
                <span className="exp-date">{school.dateto}</span>
              </div>
            </div>
          )
        })}
        <hr />
        <div className="display-skills-container">
          {cv.skills && cv.skills.map((skill) => {
            return (
              <div key={uniqid()} className="display-skill-container">{skill}</div>
            )
          })}
        </div>
        <hr />
        <div className="references-container">
          {cv.references && cv.references.map((reference) => {
            return (
              <div className="reference-container">
                <div className="ref-name">{reference.refname}</div>
                <div className="ref-phone">{reference.refphone}</div>
                <div className="ref-relation">{reference.refrelation}</div>
              </div>
            )
          })}
        </div>
      </div>}
    </div>
   );
}
 
export default CVDisplay;