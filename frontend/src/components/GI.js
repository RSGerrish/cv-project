import { useState } from 'react';
import TextControl from './TextControl';

const GI = () => {
  // const [isEdit, setIsEdit] = useState(false);

  const [firstName, setFirstName] = useState('Robin');
  const [lastName, setLastName] = useState('Gerrish');
  const [email, setEmail] = useState('robin@robinsillsgerrish.com');
  const [phone, setPhone] = useState('(610) 413-6063');
  const [linkedIn, setLinkedIn] = useState('https://linkedin.com/in/robingerrish');
  const [gitHub, setGitHub] = useState('https://github.com/RSGerrish');
  const [website, setWebsite] = useState('https://www.robinsillsgerrish.com');
  
  const [title, setTitle] = useState('Full Stack Web Developer');
  const [profile, setProfile] = useState('Enter a short profile about your accomplishments and goals')

  return ( 
    <div className="general-info">
      <div className="gi-container">
        <div className="name-container">
          <TextControl text={firstName} classCustom={"textbox-name"} opt={"box"} />
          <TextControl text={lastName} classCustom={"textbox-name"} opt={"box"} />
        </div>
        <TextControl text={title} classCustom={"textbox-title"} opt={"box"} />
        <TextControl text={profile} classCustom={"textarea-profile"} opt={"area"} />
        <hr />
        <div className="contact-grid-flex">
          <div className="contact-grid">
            <TextControl text={email} classCustom={"textbox-contact"} opt={"box"} />
            <TextControl text={phone} classCustom={"textbox-contact"} opt={"box"} />
            <TextControl text={linkedIn} classCustom={"textbox-contact"} opt={"box"} />
            <TextControl text={gitHub} classCustom={"textbox-contact"} opt={"box"} />
            <TextControl text={website} classCustom={"textbox-contact"} opt={"box"} />
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default GI;