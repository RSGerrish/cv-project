import TextControl from './TextControl'
import { useCVsContext } from '../hooks/useCVsContext'

const GI = ({ i, statePHandler }) => {
  const {cvs, dispatch} = useCVsContext()
  const cv = cvs[i]

  const stateCHandler = ((stateName, value) => {
    switch(stateName) {
      case 'first':
        statePHandler('first', value)
        break;
      
      case 'last':
        statePHandler('last', value)
        break;
      
      case 'title':
        statePHandler('title', value)
        break;

      case 'profile':
        statePHandler('profile', value)
        break;

      case 'email':
        statePHandler('email', value)
        break;

      case 'phone':
        statePHandler('phone', value)
        break;

      case 'linkedIn':
        statePHandler('linkedIn', value)
        break;

      case 'gitHub':
        statePHandler('gitHub', value)
        break;

      case 'website':
        statePHandler('website', value)
        break;
      
      default:
        break;
    }
  })

  const handleClick = async () => {
    const response = await fetch('/api/cvs/' + cv._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_CV', payload: json})
    }
  }

  return ( 
    <div className="general-info" key={cvs[i]._id}>
      <div className="gi-container">
        <div className="name-container">
          <button onClick={handleClick}>Delete</button>
          <TextControl text={cv.first} classCustom={"textbox-name"} opt={"box"} stateName={"first"} stateHandler={stateCHandler} />
          <TextControl text={cv.last} classCustom={"textbox-name"} opt={"box"} stateName={"last"} stateHandler={stateCHandler} />
        </div>
        <TextControl text={cv.title} classCustom={"textbox-title"} opt={"box"} stateName={"title"} stateHandler={stateCHandler} />
        <TextControl text={cv.profile} classCustom={"textarea-profile"} opt={"area"} stateName={"profile"} stateHandler={stateCHandler} />
        <hr />
        <div className="contact-grid-flex">
          <div className="contact-grid">
            <TextControl text={cv.email} classCustom={"textbox-contact"} opt={"box"} stateName={"email"} stateHandler={stateCHandler} />
            <TextControl text={cv.phone} classCustom={"textbox-contact"} opt={"box"} stateName={"phone"} stateHandler={stateCHandler} />
            <TextControl text={cv.linkedIn} classCustom={"textbox-contact"} opt={"box"} stateName={"linkedIn"} stateHandler={stateCHandler} />
            <TextControl text={cv.gitHub} classCustom={"textbox-contact"} opt={"box"} stateName={"gitHub"} stateHandler={stateCHandler} />
            <TextControl text={cv.website} classCustom={"textbox-contact"} opt={"box"} stateName={"website"} stateHandler={stateCHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default GI;