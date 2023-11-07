import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <li className="home link">
          <Link to="/">Home</Link>
        </li>
        <li className="create link">
          <Link to="/create">Create a Crewmate!</Link>
        </li>
        <li className="gallery link">
          <Link to="/gallery">Crewmate Gallery</Link>
        </li>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
