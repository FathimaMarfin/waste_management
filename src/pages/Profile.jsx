import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { User, LogOut, Home, ShieldCheck, ArrowLeft, MapPin, UserCheck } from "lucide-react";

export default function Profile() {
  const navigate = useNavigate();
  
  // 1. Get the House Number from localStorage
  const houseNumber = localStorage.getItem("houseNumber") || "N/A";

  // 2. Data mapping to match your WorkerDashboard database
  const residentData = {
    "HN-101": "Arun K.",
    "HN-202": "Sita Ram",
    "HN-305": "Manoj V.",
    "HN-112": "Priya Das",
    "HN-404": "Rahul J.",
    "HN-215": "Anjali M.",
    "HN-501": "Kevin Sam"
  };

  // 3. Find the warden name based on the logged-in house number
  const wardenName = residentData[houseNumber] || "Not Assigned";

  const handleLogout = () => {
    localStorage.clear(); 
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 px-6 flex flex-col items-center font-sans">
      {/* 🏠 Back to Dashboard */}
      <div className="max-w-md w-full mb-4">
        <Link 
          to="/home" 
          className="flex items-center gap-2 text-[#0a5d2c] font-semibold hover:text-green-950 transition-all"
        >
          <ArrowLeft size={20} />
          Back to Dashboard
        </Link>
      </div>

      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <div className="bg-[#0a5d2c] p-8 text-center text-white">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <User size={40} />
          </div>
          <h2 className="text-xl font-bold">Resident Profile</h2>
        </div>

        <div className="p-8 space-y-6">
          {/* House Number Section */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-50 rounded-xl">
              <Home className="text-[#0a5d2c]" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">House Number</p>
              <p className="text-lg font-bold text-gray-900">HN-101</p>
            </div>
          </div>

          {/* Warden Name Section (Newly Added) */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-50 rounded-xl">
              <UserCheck className="text-[#0a5d2c]" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">House Warden</p>
              <p className="text-lg font-bold text-gray-900">Arun K.</p>
            </div>
          </div>

          {/* Local Body Section */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-50 rounded-xl">
              <MapPin className="text-[#0a5d2c]" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Local Body</p>
              <p className="text-lg font-bold text-gray-900">Kochi Municipality</p>
            </div>
          </div>

          {/* Status Section */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-50 rounded-xl">
              <ShieldCheck className="text-[#0a5d2c]" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Verification Status</p>
              <p className="text-lg font-bold text-green-700">Verified Member</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 py-4 rounded-2xl font-bold transition-all mt-4 border border-red-100"
          >
            <LogOut size={20} /> Logout
          </button>
        </div>
      </div>
    </div>
  );
}