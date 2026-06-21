const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Test API
app.get("/", (req, res) => {
  res.json({ message: "Student ID System API is working 🚀" });
});

// Get students (fake data for now)
app.get("/students", (req, res) => {
  res.json([
    {
      id: 1,
      student_id: "UGR/001",
      name: "Test Student",
      department: "Computing",
      year: 3
    }
  ]);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
