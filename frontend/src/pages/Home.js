import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("https://rajnandinipatel.me/fullstack/api/home").then((response) => {
      setMessage(response.data.message);
    });
  }, []);

  return (
    <div style={{ alignSelf: "center"}} >
      <h1>Home Page</h1>
      <p>{message}</p>
      <img
        src= "https://rajnandinipatel.me/fullstack/api/images/home-img.jpg"
        alt="Home Page"
        style={{ width: "500px", height: "auto" }}
      />
    </div>
  );
}

export default Home;

