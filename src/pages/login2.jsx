import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  // Safeguard: if someone visits /login directly, default to 'user'
  const role = location.state?.role || "user";
  const isWorker = role === "worker";

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (identifier && password) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", role);
      // Inside your handleLogin function in Login2.jsx
localStorage.setItem("houseNumber", identifier); // Saves HN-101, etc.
      // Redirect based on role
      isWorker ? navigate("/worker-dashboard") : navigate("/home");
    }
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left side: Brand */}
      <div className="hidden md:flex flex-col items-center justify-center bg-[#0a5d2c] text-white">
          <img src="/src/images/logo mal.png" alt="logo" />
      </div>

      {/* Right side: Form */}
      <div className="flex items-center justify-center bg-gray-50 px-6 py-12">
        <form onSubmit={handleLogin} className="w-full max-w-md bg-white rounded-2xl p-8 shadow-[0_10px_40px_rgba(10,93,44,0.15)]">
          <h2 className="text-2xl font-bold text-[#0a5d2c] text-center mb-6">Sign In</h2>
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">{isWorker ? "Worker ID" : "House Number"}</label>
            <input type="text" value={identifier} onChange={(e) => setIdentifier(e.target.value)} className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-[#0a5d2c] outline-none" required />
          </div>
          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-[#0a5d2c] outline-none" required />
          </div>
          <button type="submit" className="w-full bg-[#0a5d2c] text-white py-3 rounded-lg font-semibold hover:bg-[#084a23] transition">Sign in</button>
        </form>

<div  className=" mt-100 text-center">
            <p className="text-gray-500 text-sm">
              New to Shuchi?{" "}
              <Link to="/signup" className="text-[#0a5d2c] font-bold hover:underline">
                Create an Account
              </Link>
            </p>
          </div>      </div>
    </div>
  );
}