import { Link } from 'react-router-dom'

const Lander = () => {
  return ( 
    <div className="lander">
      <div className="lander-container">
        <div className="create-container">
          <Link to="/AddCV">
            <span className="lander-span">Create a CV</span>
          </Link>
        </div>
        <div className="lander-text">
          <h2>Create, edit, manage and store your CVs to aid you in your job search.</h2>
          <ul><h3>Features to come</h3>
            <li>Save as PDF</li>
            <li>Print</li>
          </ul>
        </div>
      </div>
    </div>
   );
}
 
export default Lander;