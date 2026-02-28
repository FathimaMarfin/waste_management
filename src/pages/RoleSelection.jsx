import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Truck } from 'lucide-react'; // Minimalist white icons

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleChoice = (role) => {
    navigate('/login', { state: { role: role } });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 font-sans">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-medium text-[#0a5d2c] tracking-tight mb-2">
          Welcome to <span className="font-bold">Shuchi</span>
        </h1>
        <p className="text-gray-500 text-sm tracking-wide uppercase">
          Please select your role to continue
        </p>
      </div>

      {/* Button Container */}
      <div className="flex gap-8">
        {/* User Card */}
        <button 
          onClick={() => handleChoice('user')}
          className="group w-55 h-56 bg-[#0a5d2c] rounded-2xl flex flex-col items-center justify-center transition-all duration-300 shadow-[0_20px_50px_rgba(10,93,44,0.3)] hover:shadow-[0_30px_60px_rgba(10,93,44,0.4)] hover:-translate-y-2 border border-white/10"
        >
          <div className="p-4 bg-white/10 rounded-full mb-4 group-hover:bg-white/20 transition-colors">
            <User size={48} className="text-white" strokeWidth={1.5} />
          </div>
          <span className="text-white text-xl font-medium tracking-wide">User</span>
        </button>

        {/* Worker Card */}
        <button 
          onClick={() => handleChoice('worker')}
          className="group w-55 h-56 bg-[#0a5d2c] rounded-2xl flex flex-col items-center justify-center transition-all duration-300 shadow-[0_20px_50px_rgba(10,93,44,0.3)] hover:shadow-[0_30px_60px_rgba(10,93,44,0.4)] hover:-translate-y-2 border border-white/10"
        >
          <div className="p-4 bg-white/10 rounded-full mb-4 group-hover:bg-white/20 transition-colors">
            <Truck size={48} className="text-white" strokeWidth={1.5} />
          </div>
          <span className="text-white text-xl font-medium tracking-wide">Worker</span>
        </button>
      </div>
    </div>
  );
};

export default RoleSelection;