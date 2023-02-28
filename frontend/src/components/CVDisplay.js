import uniqid from 'uniqid'
import { useNavigate, Link } from "react-router-dom"
import { useCVsContext } from '../hooks/useCVsContext'
import { useIndexContext } from '../hooks/useIndexContext'
import { useAuthContext } from "../hooks/useAuthContext"
import Lander from './Lander'

const CVDisplay = ({ cv }) => {
  const { cvsDispatch } = useCVsContext()
  const { index, indexDispatch } = useIndexContext()
  const { user } = useAuthContext()
  const navigate = useNavigate()

  const handleDelete = async () => {
    if (!user) {
      return
    }

    if (!cv) {
      return
    }

    const response = await fetch('https://cv-creator.onrender.com/api/cvs/' + cv._id, {
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
    <div key ={uniqid()} className="cv-display">
      {cv && <div className="cv-display-container">
        <div className="cv-controls">
          <Link to="/AddCV">
            <span className="button-span">new</span>
          </Link>
          <span className="button-span" onClick={handleDelete}>delete</span>
          <span className="button-span" onClick={handleEdit}>edit</span>
        </div>
        <div className="contact-container">
          <div className="phone">{cv.phone}</div>
          <div className="email">{cv.email}</div>
          <div className="address">{cv.address}</div>
        </div>

        <h1 className="name">{cv.name}</h1>
        <h2 className="prof-title">{cv.title}</h2>
        <h3 className="profile">{cv.profile}</h3>
        <hr />
        <div className="display-skills-container">
          {cv.skills && cv.skills.map((skill) => {
            return (
              <div key={uniqid()} className="display-skill-container">{skill}</div>
            )
          })}
        </div>
        <hr />
        <div className="portfolio-container">
          <h4 className="portfolio-item">{cv.website}</h4>
          <h4 className="portfolio-item">{cv.github}</h4>
          <h4 className="portfolio-item">{cv.linkedin}</h4>
        </div>
        <hr />
        {cv.experience && cv.experience.map((job) => {
          const parseDateFrom = job.datefrom.split('-')
          const parseDateTo = job.dateto.split('-')
          const expDateFrom = new Date(parseInt(parseDateFrom[0]), parseInt(parseDateFrom[1]) - 1, parseInt(parseDateFrom[2]))
          const expDateTo = new Date(parseInt(parseDateTo[0]), parseInt(parseDateTo[1]) - 1, parseInt(parseDateTo[2]))

          return (
            <div key={uniqid()} className="experience-container">
              <div className="exp-titdur-container">
                <div className="exp-title-container">
                  <h3 className="pos-title">{job.jobtitle}</h3>
                  <h4 className="company-name">{job.companyname}</h4>
                </div>
                <div className="exp-duration-container">
                  {job.datefrom && <span className="exp-date">{expDateFrom.toLocaleDateString('en-us', { month: "long", year: "numeric" })}</span>}
                  {job.datefrom && <span className="exp-date">to</span>}
                  <span className="exp-date">{expDateTo.toLocaleDateString('en-us', { month: "long", year: "numeric" })}</span>
                </div>
              </div>
              <div className="highlights">{job.highlights}</div>
            </div>
          )
        })}
        <hr />
        {cv.schools && cv.schools.map((school) => {
          const parseDateFrom = school.datefrom.split('-')
          const parseDateTo = school.dateto.split('-')
          const schDateFrom = new Date(parseInt(parseDateFrom[0]), parseInt(parseDateFrom[1]) - 1, parseInt(parseDateFrom[2]))
          const schDateTo = new Date(parseInt(parseDateTo[0]), parseInt(parseDateTo[1]) - 1, parseInt(parseDateTo[2]))


          return (
            <div key={uniqid()} className="school-container">
              <div className="sch-name-container">
                <h3 className="school-name">{school.name}</h3>
                <div className="school-location">{school.location}</div>
                <div className="school-degree">{school.degree}</div>
              </div>
              <div className="sch-duration-container">
                {school.datefrom && <span className="exp-date">{schDateFrom.toLocaleDateString('en-us', { month: "long", year: "numeric" })}</span>}
                {school.datefrom && <span className="exp-date">to</span>}
                <span className="exp-date">{schDateTo.toLocaleDateString('en-us', { month: "long", year: "numeric" })}</span>
              </div>
            </div>
          )
        })}
        <hr />
        <div className="references-container">
          {cv.references && <div className="reference-title-container">
            <div className="reference-title"><h2>References</h2></div>
              <div className="reference-tit-container">
                <div className="ref-tit-name">Name</div>
                <div className="ref-tit-relation">Relation</div>
                <div className="ref-tit-phone">Contact Number</div>
              </div>
            </div>}
          {cv.references && cv.references.map((reference) => {
            return (
              <div key={uniqid()} className="reference-dis-container">
                <div className="ref-dis-name">{reference.refname}</div>
                <div className="ref-dis-relation">{reference.refrelation}</div>
                <div className="ref-dis-phone">{reference.refphone}</div>
              </div>
            )
          })}
        </div>
      </div>}
      {!cv && <Lander />}
    </div>
   );
}
 
export default CVDisplay;