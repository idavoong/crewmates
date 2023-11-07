import { useState } from "react";
import { supabase } from "../src/client";
import "./Create.css";

const Create = () => {
  const [crew, setCrew] = useState({ name: "", speed: "", color: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCrew((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const createCrew = async (event) => {
    event.preventDefault();

    const { error } = await supabase
      .from("crewmates")
      .insert({
        name: crew.name,
        speed: crew.speed,
        color: crew.color,
      })
      .select();

    if (error) {
      console.log(error);
    }

    window.location = "/";
  };

  return (
    <div>
      <h1>Create a New Crewmate</h1>
      <form className="form">
        <div className="name field">
          <label>Name:</label>
          <input
            name="name"
            type="text"
            value={crew.name}
            onChange={handleChange}
          />
        </div>
        <div className="speed field">
          <label>Speed (mph):</label>
          <input
            name="speed"
            type="text"
            value={crew.speed}
            onChange={handleChange}
          />
        </div>
        <div
          name="color"
          className="color field"
          value={crew.color}
          onChange={handleChange}
        >
          <label>Color: </label>
          <li>
            <input name="color" type="radio" id="Red" value="Red" />
            Red
          </li>
          <li>
            <input name="color" type="radio" id="Green" value="Green" />
            Green
          </li>
          <li>
            <input name="color" type="radio" id="Blue" value="Blue" />
            Blue
          </li>
          <li>
            <input name="color" type="radio" id="Purple" value="Purple" />
            Purple
          </li>
          <li>
            <input name="color" type="radio" id="Yellow" value="Yellow" />
            Yellow
          </li>
          <li>
            <input name="color" type="radio" id="Orange" value="Orange" />
            Orange
          </li>
          <li>
            <input name="color" type="radio" id="Pink" value="Pink" />
            Pink
          </li>
          <li>
            <input name="color" type="radio" id="Rainbow" value="Rainbow" />
            Rainbow
          </li>
        </div>
      </form>
      <button type="submit" className="button" onClick={createCrew}>
        Create Crewmate
      </button>
    </div>
  );
};

export default Create;
