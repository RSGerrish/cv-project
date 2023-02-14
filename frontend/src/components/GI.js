import TextControl from './TextControl'
import { useCVsContext } from '../hooks/useCVsContext'

const GI = ({ i, statePHandler }) => {
  const {cvs} = useCVsContext()

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

  return ( 
    <div className="general-info" key={cvs[i]._id}>
      <div className="gi-container">
        <div className="name-container">
          <TextControl text={cvs[i].first} classCustom={"textbox-name"} opt={"box"} stateName={"first"} stateHandler={stateCHandler} />
          <TextControl text={cvs[i].last} classCustom={"textbox-name"} opt={"box"} stateName={"last"} stateHandler={stateCHandler} />
        </div>
        <TextControl text={cvs[i].title} classCustom={"textbox-title"} opt={"box"} stateName={"title"} stateHandler={stateCHandler} />
        <TextControl text={cvs[i].profile} classCustom={"textarea-profile"} opt={"area"} stateName={"profile"} stateHandler={stateCHandler} />
        <hr />
        <div className="contact-grid-flex">
          <div className="contact-grid">
            <TextControl text={cvs[i].email} classCustom={"email-contact"} opt={"box"} stateName={"email"} stateHandler={stateCHandler} />
            <TextControl text={cvs[i].phone} classCustom={"phone-contact"} opt={"box"} stateName={"phone"} stateHandler={stateCHandler} />
            <TextControl text={cvs[i].gitHub} classCustom={"gitHub-contact"} opt={"box"} stateName={"gitHub"} stateHandler={stateCHandler} />
            <TextControl text={cvs[i].website} classCustom={"website-contact"} opt={"box"} stateName={"website"} stateHandler={stateCHandler} />
            <TextControl text={cvs[i].linkedIn} classCustom={"linkedIn-contact"} opt={"box"} stateName={"linkedIn"} stateHandler={stateCHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default GI;