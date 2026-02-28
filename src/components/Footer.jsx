import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Home, LayoutDashboard, History, MessageSquare, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0a3d1d] text-white pt-12 pb-6 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand Section */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-3">
            <img src="/src/images/logo mal.png" alt="Shuchi Logo" className="w-70 h-45 brightness-110" />
          </div>
          <p className="text-green-100/70 text-sm leading-relaxed max-w-xs">
            Smart waste management for a cleaner and greener future. join us in making our environment sustainable.
          </p>
          <div className="flex gap-4 pt-2">
            <Globe size={18} className="text-green-300 hover:text-white cursor-pointer transition-colors" />
            {/* Add more social icons here if needed */}
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold text-green-400 uppercase tracking-widest">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/home" className="flex items-center gap-2 text-green-100/80 hover:text-white transition-all hover:translate-x-1">
                <Home size={16} /> Home
              </Link>
            </li>
            <li>
              <Link to="/worker-dashboard" className="flex items-center gap-2 text-green-100/80 hover:text-white transition-all hover:translate-x-1">
                <LayoutDashboard size={16} /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/profile" className="flex items-center gap-2 text-green-100/80 hover:text-white transition-all hover:translate-x-1">
                <History size={16} /> History
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex items-center gap-2 text-green-100/80 hover:text-white transition-all hover:translate-x-1">
                <MessageSquare size={16} /> Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold text-green-400 uppercase tracking-widest">Get In Touch</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/5">
              <div className="p-2 bg-green-800 rounded-lg">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs text-green-300 font-bold uppercase">Call Us</p>
                <p className="text-sm font-semibold">+91 12345 67890</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/5">
              <div className="p-2 bg-green-800 rounded-lg">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-green-300 font-bold uppercase">Email Us</p>
                <p className="text-sm font-semibold">server404@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-green-100/40 font-medium">
        <p>© 2026 WasteConnect. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;