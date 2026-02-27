export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 w-full z-50 
      flex items-center justify-between px-8 py-4
      bg-white/20 backdrop-blur-lg
      border-b border-white/30
      shadow-lg">

    
      <div className="text-xl font-bold text-black tracking-wide">
        WasteManager
      </div>

     
      <div className="flex gap-10 text-black font-medium  ml-auto">
  <a href="contact" className="hover:text-green-950 transition">
    Contact
  </a>
  <a href="history" className="hover:text-green-950 transition">
    History
  </a>
  <a href="about" className="hover:text-green-950 transition">
    About Us
  </a>
</div>

      
      <div className="text-black text-2xl cursor-pointer hover:scale-110 transition">
        👤
      </div>

    </nav>
  );
}