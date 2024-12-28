const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use('/fullstack/api/images', express.static(path.join(__dirname, '/public/images')));

// Serve static files for the frontend
app.use('/fullstack', express.static(path.join(__dirname, '../frontend/build')));

// API Routes
app.get("/fullstack/api/home", (req, res) => {
  res.json({ message: "Hello from backend . Welcome to the Home Page!" });
});

app.get("/fullstack/api/about", (req, res) => {
  res.json({ message: "Hello from backend. This is the About Page!" });
});

app.get("/fullstack/api/contact", (req, res) => {
    res.json({ message: "Hello from backend. This is the Contact Page!" });
  });

app.get('/fullstack/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/fullstack`);
});
