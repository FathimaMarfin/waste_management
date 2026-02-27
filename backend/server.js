import express from "express";
import cors from "cors";
import { pool } from "./db.js";

const app = express();
const PORT = 5000;

// 1. Middleware
app.use(cors()); // Allows your React frontend to talk to this server
app.use(express.json()); // Parses incoming JSON requests

// 2. Login Route
app.post("/login", async (req, res) => {
  const { houseNumber, password } = req.body;

  try {
    const result = await pool.query(
      "SELECT * FROM houses WHERE houseNumber=$1 AND password=$2",
      [houseNumber, password]
    );

    if (result.rows.length > 0) {
      // Return user data (excluding password for security)
      const user = result.rows[0];
      res.json({ 
        success: true, 
        message: "Login successful",
        user: { houseNumber: user.housenumber } 
      });
    } else {
      res.status(401).json({ success: false, message: "Invalid House Number or Password" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server Error" });
  }
});

// 3. Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
