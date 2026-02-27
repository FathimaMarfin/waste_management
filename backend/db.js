import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// 🔥 Test connection immediately
pool.connect()
  .then(() => console.log("✅ Neon DB Connected"))
  .catch((err) => console.error("❌ Neon DB Failed:", err.message));