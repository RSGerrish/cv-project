import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <header>
      <div className="navbar">
        <Link to="/">
          <h1>CV Creator</h1>
        </Link>
        <Link to="/AddCV">
          <div className="navbar-link">Add CV</div>
        </Link>
      </div>
    </header>
   );
}
 
export default Navbar;