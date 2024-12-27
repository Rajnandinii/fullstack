const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use('/fullstack/api/images', express.static(path.join(__dirname, '/public/images')));

// API Routes
app.get("/fullstack/api/home", (req, res) => {
  res.json({ message: "Welcome to the Home Page!" });
});

app.get("/fullstack/api/about", (req, res) => {
  res.json({ message: "This is the About Page!" });
});

app.get("/fullstack/api/contact", (req, res) => {
    res.json({ message: "This is the Contact Page!" });
  });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
