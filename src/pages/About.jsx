import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Leaf, History, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-28 px-6 pb-20">
      
      {/* 🏠 Back to Home */}
      <div className="max-w-5xl mx-auto mb-8">
        <Link 
          to="/home" 
          className="inline-flex items-center gap-2 text-green-800 font-semibold hover:text-green-950 transition-all group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Dashboard
        </Link>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* 🌿 Header Section */}
        <div className="text-center mb-16">
          <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            Our Mission
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mt-4 mb-6">
            Towards a Zero-Waste Future
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our waste management system is powered by the dedication of Haritha Karma Sena, 
            driving sustainability through community action.
          </p>
        </div>

        {/* 📸 Large Featured Image Space */}
        <div className="w-full h-64 md:h-96 bg-gray-100 rounded-3xl overflow-hidden mb-16 shadow-inner flex items-center justify-center border-2 border-dashed border-gray-200">
           <img  className="w-full h-full  object-cover opacity-100"
            src="/src/images/h3.jpg" 
            alt="Waste Management Demo" 
            
          />
          <div className="absolute text-green-900 font-medium bg-white/80 px-4 py-2 rounded-lg">
            
          </div>
        </div>

        {/* 📜 History & Origin Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4 text-green-800">
              <History size={28} />
              <h2 className="text-2xl font-bold">The Origin of HKS</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Haritha Karma Sena (HKS) was formed as part of a larger mission to manage non-biodegradable waste 
              systematically at the local government level. The initiative was designed to professionalize 
              waste collection and ensure that materials like plastic, glass, and metal are diverted from 
              landfills into recycling streams.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Starting as a grassroots movement, HKS members act as "Green Technicians," educating households 
              on segregation while providing a reliable monthly collection service that keeps our surroundings clean.
              For futrher details, visit the official website of <a href="https://haritham.kerala.gov.in/" className="text-green-800 hover:underline">Kerala Panchayat's HKS page</a>.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-48 bg-green-50 rounded-2xl flex items-center justify-center border border-green-100">
               <span className="text-green-800 text-sm"><img src="/src/images/h1.jpg" alt="" /></span>
            </div>
            <div className="h-48 bg-green-50 rounded-2xl flex items-center justify-center border border-green-100 mt-8">
               <span className="text-green-800 text-sm"><img src="/src/images/h2.jpg" alt="" /></span>
            </div>
          </div>
        </div>

        {/* 💎 Core Values */}
        <div className="bg-green-900 rounded-3xl p-10 text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Why We Do It</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="bg-green-800 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-green-300" />
              </div>
              <h3 className="text-xl font-semibold">Sustainability</h3>
              <p className="text-green-100 text-sm">Ensuring resources are reused rather than discarded into nature.</p>
            </div>
            <div className="text-center space-y-3">
              <div className="bg-green-800 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-300" />
              </div>
              <h3 className="text-xl font-semibold">Community</h3>
              <p className="text-green-100 text-sm">Empowering local workers and fostering civic responsibility.</p>
            </div>
            <div className="text-center space-y-3">
              <div className="bg-green-800 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="text-green-300 font-bold">0%</div>
              </div>
              <h3 className="text-xl font-semibold">Zero Waste</h3>
              <p className="text-green-100 text-sm">A systematic approach to eliminate plastic pollution completely.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}