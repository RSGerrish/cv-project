import TextControl from './TextControl'
import { useCVsContext } from '../hooks/useCVsContext';

const GI = ({ i }) => {
  const {cvs} = useCVsContext()
  // const [isEdit, setIsEdit] = useState(false);

  /*
  const [firstName, setFirstName] = useState(cv.first);
  const [lastName, setLastName] = useState(cv.last);
  const [email, setEmail] = useState(cv.email);
  const [phone, setPhone] = useState(cv.phone);
  const [linkedIn, setLinkedIn] = useState(cv.linkedIn);
  const [gitHub, setGitHub] = useState(cv.gitHub);
  const [website, setWebsite] = useState(cv.website);
  
  const [title, setTitle] = useState(cv.title);
  const [profile, setProfile] = useState(cv.profile)
  */

  return ( 
    <div className="general-info" key={cvs[i]._id}>
      <div className="gi-container">
        <div className="name-container">
          <TextControl text={cvs[i].first} classCustom={"textbox-name"} opt={"box"} />
          <TextControl text={cvs[i].last} classCustom={"textbox-name"} opt={"box"} />
        </div>
        <TextControl text={cvs[i].title} classCustom={"textbox-title"} opt={"box"} />
        <TextControl text={cvs[i].profile} classCustom={"textarea-profile"} opt={"area"} />
        <hr />
        <div className="contact-grid-flex">
          <div className="contact-grid">
            <TextControl text={cvs[i].email} classCustom={"textbox-contact"} opt={"box"} />
            <TextControl text={cvs[i].phone} classCustom={"textbox-contact"} opt={"box"} />
            <TextControl text={cvs[i].linkedIn} classCustom={"textbox-contact"} opt={"box"} />
            <TextControl text={cvs[i].gitHub} classCustom={"textbox-contact"} opt={"box"} />
            <TextControl text={cvs[i].website} classCustom={"textbox-contact"} opt={"box"} />
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default GI;