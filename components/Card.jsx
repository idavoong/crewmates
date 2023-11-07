/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ id, name, speed, color }) => {
  return (
    <div className="card">
      <p>Name of Crewmate: {name}</p>
      <p>Speed of Crewmate: {speed}</p>
      <p>Color of Crewmate: {color}</p>
      <Link to={"/edit/" + id}>
        <button>Edit Crewmate</button>
      </Link>
    </div>
  );
};

export default Card;
