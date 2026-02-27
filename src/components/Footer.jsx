import React from 'react'

function Footer() {
  return (
    <div>
        {/* 🔻 Footer */}
<footer className="mt-16 bg-green-900 text-white rounded-t-3xl shadow-[0_-8px_30px_rgba(0,100,0,0.4)]">
  <div className="max-w-7xl mx-auto px-6 py-10">

    <div className="grid md:grid-cols-3 gap-8">

      {/* Logo / Title */}
      <div>
        <h3 className="text-2xl font-bold mb-3">♻️ WasteConnect</h3>
        <p className="text-green-200 text-sm">
          Smart waste management for a cleaner and greener future.
        </p>
      </div>

      {/* Navbar Links */}
      <div>
        <h4 className="font-semibold mb-3 text-green-300">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-green-400 cursor-pointer transition">Home</li>
          <li className="hover:text-green-400 cursor-pointer transition">Dashboard</li>
          <li className="hover:text-green-400 cursor-pointer transition">History</li>
          <li className="hover:text-green-400 cursor-pointer transition">Contact</li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className="font-semibold mb-3 text-green-300">Contact</h4>
        <p className="text-sm text-green-200">
          📞 12345689
        </p>
        <p className="text-sm text-green-200 mt-2">
          📧 server404@gmail.com
        </p>
      </div>

    </div>

    {/* Bottom Bar */}
    <div className="border-t border-green-700 mt-8 pt-4 text-center text-sm text-green-300">
      © {new Date().getFullYear()} WasteConnect. All rights reserved.
    </div>

  </div>
</footer>
    </div>
  )
}

export default Footer