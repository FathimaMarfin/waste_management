import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { User, LogOut, Briefcase, ShieldCheck, ArrowLeft, MapPin, Phone } from "lucide-react";

export default function WorkerProfile() {
  const navigate = useNavigate();
  
  // 1. Get the Worker ID from localStorage (saved during login)
  const workerId = localStorage.getItem("houseNumber") || "W-102";

  const handleLogout = () => {
    localStorage.clear(); 
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 px-6 flex flex-col items-center font-sans">
      {/* ⬅️ Back to Worker Database */}
      <div className="max-w-md w-full mb-4">
        <Link 
          to="/worker-dashboard" 
          className="flex items-center gap-2 text-[#0a5d2c] font-semibold hover:text-green-950 transition-all"
        >
          <ArrowLeft size={20} />
          Back to Database
        </Link>
      </div>

      <div className="max-w-md w-full bg-white shadow-xl overflow-hidden border border-gray-100 rounded-[40px]">
        {/* Header Section */}
        <div className="bg-[#0a5d2c] p-10 text-center text-white">
          <div className="w-24 h-24 bg-white/20 rounded-[30px] flex items-center justify-center mx-auto mb-4 border border-white/10">
            <User size={48} strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">Worker Profile</h2>
          <p className="text-green-200/70 text-xs uppercase tracking-widest mt-1">Sanitation Department</p>
        </div>

        <div className="p-8 space-y-6">
          {/* Worker ID Section */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-50 rounded-[20px]">
              <Briefcase className="text-[#0a5d2c]" size={24} />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Worker ID</p>
              <p className="text-lg font-bold text-gray-900">{workerId}</p>
            </div>
          </div>

          {/* Service Area */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-50 rounded-[20px]">
              <MapPin className="text-[#0a5d2c]" size={24} />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Assigned Zone</p>
              <p className="text-lg font-bold text-gray-900">Kochi Sector A-12</p>
            </div>
          </div>

          {/* Contact info */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-50 rounded-[20px]">
              <Phone className="text-[#0a5d2c]" size={24} />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Official Contact</p>
              <p className="text-lg font-bold text-gray-900">+91 90000 11111</p>
            </div>
          </div>

          {/* Verification Status */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-50 rounded-[20px]">
              <ShieldCheck className="text-[#0a5d2c]" size={24} />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Employment Status</p>
              <p className="text-lg font-bold text-green-700">Active / Verified</p>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 py-4 rounded-[25px] font-black uppercase text-xs tracking-widest transition-all mt-4 border border-red-100"
          >
            <LogOut size={18} /> Logout Session
          </button>
        </div>
      </div>
    </div>
  );
}