import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [houseNumber, setHouseNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // 🔥 Hackathon demo login
    if (houseNumber && password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    }
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2">

      <div className="hidden md:flex items-center justify-center bg-green-900 relative overflow-hidden">
        
        <img src="/src/images/logo mal.png" alt="logo" />
      </div>

      <div className="flex items-center justify-center bg-gray-50 px-6 py-12">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-white rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,100,0,0.25)]"
        >
          <h2 className="text-2xl font-bold text-green-900 text-center mb-6">
            Sign In
          </h2>

          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">
              House Number
            </label>
            <input
              type="text"
              placeholder="e.g. HN-102"
              value={houseNumber}
              onChange={(e) => setHouseNumber(e.target.value)}
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-700"
              required
            />
          </div>

       
          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-700"
              required
            />
          </div>

          
          <button
            type="submit"
            className="w-full bg-green-800 hover:bg-green-900 text-white py-3 rounded-lg font-semibold transition"
          >
            Sign in
          </button>

          
        </form>
      </div>
    </div>
  );
}