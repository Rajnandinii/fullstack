import React, { useState, useEffect } from "react";
import axios from "axios";

const Contact = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
      axios.get("https://rajnandinipatel.me/fullstack/api/contact").then((response) => {
        setMessage(response.data.message);
      });
    }, []);
  
    return (
      <div>
        <h1>Contact Page</h1>
        <p>{message}</p>
      </div>
    );
  }
  

export default Contact
