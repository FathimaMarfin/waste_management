import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { User, LogOut, Home, ShieldCheck, ArrowLeft, MapPin } from "lucide-react";

export default function Profile() {
  const navigate = useNavigate();
  const houseNumber = localStorage.getItem("houseNumber") || "N/A";

  const handleLogout = () => {
    localStorage.clear(); // Clears isLoggedIn and houseNumber
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 px-6 flex flex-col items-center">
      {/* 🏠 Back to Dashboard */}
      <div className="max-w-md w-full mb-4">
        <Link 
          to="/home" 
          className="flex items-center gap-2 text-green-800 font-semibold hover:text-green-950 transition-all"
        >
          <ArrowLeft size={20} />
          Back to Dashboard
        </Link>
      </div>

      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <div className="bg-green-900 p-8 text-center text-white">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <User size={40} />
          </div>
          <h2 className="text-xl font-bold">Resident Profile</h2>
        </div>

        <div className="p-8 space-y-6">
          <div className="flex items-center gap-4">
            <Home className="text-green-800" />
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase">House Number</p>
              <p className="text-lg font-semibold text-gray-900">{houseNumber}</p>
            </div>
          </div>

          {/* 🏛️ Municipality / Panchayat Section */}
          <div className="flex items-center gap-4">
            <MapPin className="text-green-800" />
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase">Local Body</p>
              <p className="text-lg font-semibold text-gray-900">Kochi Municipality</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ShieldCheck className="text-green-800" />
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase">Status</p>
              <p className="text-lg font-semibold text-green-700">Verified</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 py-4 rounded-2xl font-bold transition-all"
          >
            <LogOut size={20} /> Logout
          </button>
        </div>
      </div>
    </div>
  );
}