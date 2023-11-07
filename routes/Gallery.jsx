/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import Card from "../components/Card.jsx";
import { supabase } from "../src/client.jsx";
import "./Gallery.css";

const Gallery = () => {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const { data } = await supabase
        .from("crewmates")
        .select()
        .order("created_at", { ascending: true });

      setCrewmates(data);
    }
    fetchPost();
  }, []);

  return (
    <div className="crewmates">
      {crewmates && crewmates.length > 0 ? (
        crewmates.map((crew) => (
          <Card id={crew.id} name={crew.name} speed={crew.speed} color={crew.color} />
        ))
      ) : (
        <h2>{"No crewmembers yet"}</h2>
      )}
    </div>
  );
};

export default Gallery;
