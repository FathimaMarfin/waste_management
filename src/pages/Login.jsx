import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Ensure Link is imported

export default function Login() {
  const navigate = useNavigate();
  const [houseNumber, setHouseNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (houseNumber && password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    }
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left side Branding */}
      <div className="hidden md:flex items-center justify-center bg-[#0a5d2c] p-12">
        <img src="/src/images/logo mal.png" alt="logo" className="w-80" />
      </div>

      {/* Right side Form */}
      <div className="flex items-center justify-center bg-gray-50 px-6 py-12">
        <form onSubmit={handleLogin} className="w-full max-w-md bg-white rounded-3xl p-10 shadow-xl">
          <h2 className="text-3xl font-bold text-[#0a5d2c] text-center mb-8">Sign In</h2>
          
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">House Number</label>
            <input
              type="text"
              placeholder="e.g. HN-102"
              className="w-full p-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#0a5d2c]"
              required
            />
          </div>

          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#0a5d2c]"
              required
            />
          </div>

          <button type="submit" className="w-full bg-[#0a5d2c] hover:bg-[#084a23] text-white py-4 rounded-xl font-bold text-lg transition-all mb-6">
            Sign in
          </button>

          {/* New Signup Section */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              New to Shuchi?{" "}
              <Link to="/signup" className="text-[#0a5d2c] font-bold hover:underline">
                Create an Account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}