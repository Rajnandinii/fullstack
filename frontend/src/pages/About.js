import React, { useState, useEffect } from "react";
import axios from "axios";

function About() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/fullstack/api/about").then((response) => {
      setMessage(response.data.message);
    });
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <p>{message}</p>
    </div>
  );
}

export default About;
