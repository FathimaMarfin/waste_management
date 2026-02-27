import { Mail, Phone, MapPin, ArrowLeft } from "lucide-react"; // Added ArrowLeft for the icon
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-white pt-28 px-6 pb-12">
      
      {/* 🏠 Back to Home Button */}
      <div className="max-w-6xl mx-auto mb-6">
        <Link 
          to="/home" 
          className="inline-flex items-center gap-2 text-green-800 font-semibold hover:text-green-950 transition-all group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Dashboard
        </Link>
      </div>

      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-900 mb-3">
          Contact Us
        </h1>
        <p className="text-gray-600">
          Have questions about waste collection? We’re here to help.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Left — Contact Info */}
        <div className="bg-white rounded-2xl shadow-lg shadow-green-900/20 p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-green-900">
            Get in Touch
          </h2>

          <div className="flex items-center gap-4">
            <Phone className="text-green-800" />
            <span className="text-gray-700">12345689</span>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="text-green-800" />
            <span className="text-gray-700">server404@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-green-800" />
            <span className="text-gray-700">
              WasteReady Municipal Office
            </span>
          </div>

          <p className="text-sm text-gray-500 pt-4">
            Our team responds within 24 hours.
          </p>
        </div>

        {/* Right — Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg shadow-green-900/20 p-8">
          <h2 className="text-2xl font-semibold text-green-900 mb-6">
            Send Message
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"
            />

            <button
              type="submit"
              className="w-full bg-green-900 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}