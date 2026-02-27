import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 w-full z-50 
      flex items-center justify-between px-8 py-4
      bg-white/20 backdrop-blur-lg
      border-b border-white/30
      shadow-lg">

      {/* Logo */}
      <Link href="/" className="text-xl font-bold text-black tracking-wide">
        <img className="h-12 w-12 scale-150" src="/src/images/logo eng.png" alt="logo" />
      </Link>

      {/* Navigation Links - Now using Link from react-router-dom */}
      <div className="flex gap-10 text-black font-medium ml-auto">
        <Link to="/contact" className="hover:text-green-950 transition">
          Contact
        </Link>
        <Link to="/about" className="hover:text-green-950 transition">
          About Us
        </Link>
      </div>

      {/* 👤 Profile Icon - Now links to /profile */}
      <Link 
        to="/profile" 
        className="text-black text-2xl px-6 cursor-pointer hover:scale-110 transition flex items-center"
      >
        👤
      </Link>
    </nav>
  );
}