import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Home, MapPin, User, ArrowRight, Lock } from "lucide-react";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    houseNumber: "",
    municipality: "",
    ownerName: "",
    password: ""
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://waste-management-05mh.onrender.com/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // ✅ 1. Save to Database (Done via the POST request above)

        // ✅ 2. Perform "Auto-Login" by setting local session
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userRole", "user"); 
        localStorage.setItem("houseNumber", formData.houseNumber);
        localStorage.setItem("ownerName", formData.ownerName);

        // ✅ 3. Redirect directly to the User Home/Dashboard
        navigate("/home");
      } else {
        alert(data.msg || "❌ Signup failed. Try a different House Number.");
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("❌ Connection error. Is your backend running?");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-[45px] overflow-hidden border border-gray-100">
        
        {/* Header Section */}
        <div className="bg-[#0a5d2c] p-10 text-center text-white">
          <h2 className="text-3xl font-black uppercase tracking-tighter">Join Shuchi</h2>
          <p className="text-green-200/70 text-xs uppercase tracking-[0.2em] mt-2">Resident Registration</p>
        </div>

        <form onSubmit={handleSignup} className="p-10 space-y-5">
          {/* House Owner Name */}
          <div className="relative">
            <User className="absolute left-4 top-4 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="House Owner Name"
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-[25px] outline-none focus:ring-2 focus:ring-[#0a5d2c] font-medium"
              onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
              required
            />
          </div>

          {/* House Number */}
          <div className="relative">
            <Home className="absolute left-4 top-4 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="House Number (e.g., HN-101)"
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-[25px] outline-none focus:ring-2 focus:ring-[#0a5d2c] font-medium"
              onChange={(e) => setFormData({ ...formData, houseNumber: e.target.value })}
              required
            />
          </div>

          {/* Municipality Dropdown */}
          <div className="relative">
            <MapPin className="absolute left-4 top-4 text-gray-400" size={20} />
            <select
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-[25px] outline-none focus:ring-2 focus:ring-[#0a5d2c] font-medium appearance-none text-gray-600"
              onChange={(e) => setFormData({ ...formData, municipality: e.target.value })}
            >
              <option value="Kochi Municipality">Kochi Municipality</option>
              <option value="Trivandrum Corp">Trivandrum Corp</option>
              <option value="Calicut Municipality">Calicut Municipality</option>
            </select>
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-4 top-4 text-gray-400" size={20} />
            <input
              type="password"
              placeholder="Set Password"
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-[25px] outline-none focus:ring-2 focus:ring-[#0a5d2c] font-medium"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0a5d2c] text-white py-4 rounded-[25px] font-black uppercase tracking-widest shadow-lg hover:shadow-[#0a5d2c]/30 transition-all flex items-center justify-center gap-2 group"
          >
            Create Account <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-wider">
            Already have an account?{" "}
            <Link to="/login" className="text-[#0a5d2c] hover:underline">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}