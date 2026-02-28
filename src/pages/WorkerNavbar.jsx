import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, LogOut, LayoutDashboard, ClipboardList, Settings } from "lucide-react";

const WorkerNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-8 py-4 flex justify-between items-center">
      {/* Left: Brand */}
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Shuchi Logo" className="w-10 h-10" />
        <div className="flex flex-col">
          <span className="text-[#0a5d2c] font-black text-xl leading-none">ശുചി</span>
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Worker Portal</span>
        </div>
      </div>

      {/* Center: Management Links */}
      <div className="hidden md:flex items-center gap-8">
        <Link to="/worker-dashboard" className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-[#0a5d2c] transition-colors">
          <LayoutDashboard size={18} /> Collection Database
        </Link>
        <Link to="/work-logs" className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-[#0a5d2c] transition-colors">
          <ClipboardList size={18} /> My Logs
        </Link>
      </div>

      {/* Right: Profile & Logout */}
      <div className="flex items-center gap-4">
        {/* Profile Link with your 40px radius style */}
        <Link 
          to="/worker-profile" 
          className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-[40px] text-[#0a5d2c] hover:bg-green-100 transition-all border border-green-100"
        >
          <User size={18} />
          <span className="text-xs font-bold uppercase tracking-wider">Profile</span>
        </Link>

        {/* Logout Button */}
        <button 
          onClick={handleLogout}
          className="p-3 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-[20px] transition-all"
          title="Logout"
        >
          <LogOut size={20} />
        </button>
      </div>
    </nav>
  );
};

export default WorkerNavbar;
