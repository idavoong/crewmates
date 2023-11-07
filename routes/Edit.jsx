import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../src/client";
import "./Edit.css";

const Edit = () => {
  const { id } = useParams();
  const [crewmates, setCrewmates] = useState([]);
  const [editCrew, setEditCrew] = useState({name: "", speed: "", color: ""});

  useEffect(() => {
    async function fetchPost() {
      const { data } = await supabase
        .from("crewmates")
        .select()
        .eq("id", id)
        .single();

      setCrewmates(data);
    }

    fetchPost();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditCrew((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const updateCrew = async (event) => {
    event.preventDefault();

    await supabase
      .from("crewmates")
      .update({
        name: editCrew.name,
        speed: editCrew.speed,
        color: editCrew.color,
      })
      .eq("id", id);

    window.location = "/";
  };

  async function deleteCrew(event) {
    event.preventDefault();

    await supabase.from("crewmates").delete().eq("id", id);

    window.location = "/";
  }

  return (
    <>
      <div>
        <h1>Update Your Crewmate</h1>
        <h3>Current Crewmate Info:</h3>
        <p>
          Name: {crewmates.name}, Speed: {crewmates.speed}, Color:{" "}
          {crewmates.color}
        </p>
      </div>
      <div>
        <h1>Create a New Crewmate</h1>
        <form className="form">
          <div className="name field">
            <label>Name:</label>
            <input
              name="name"
              type="text"
              value={editCrew.name}
              onChange={handleChange}
            />
          </div>
          <div className="speed field">
            <label>Speed (mph):</label>
            <input
              name="speed"
              type="text"
              value={editCrew.speed}
              onChange={handleChange}
            />
          </div>
          <div
            name="color"
            className="color field"
            value={editCrew.color}
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
        <button type="submit" className="button" onClick={updateCrew}>
          Edit Crewmate
        </button>
        <button className="deleteButton" onClick={deleteCrew}>
          Delete Crewmate
        </button>
      </div>
    </>
  );
};

export default Edit;
