import React from "react";
// ✅ FIXED: Single consolidated import for react-router-dom
import { Routes, Route, Navigate } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import RoleSelection from "./pages/RoleSelection";
import Login from "./pages/login2"; 
import Home from "./pages/Home";
import WorkerDashboard from "./pages/WorkerDashboard";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
/**
 * ProtectedRoute Wrapper
 * Ensures users are logged in before accessing private pages.
 */
function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  // If not logged in, send them to the login page
  return isLoggedIn ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Routes>
      {/* 1. Entry Point: Role Selection */}
      <Route path="/" element={<RoleSelection />} />
      
      <Route path="/signup" element={<Signup />} />

      {/* 2. Authentication: Themed Login Page */}
      <Route path="/login" element={<Login />} />

      {/* 3. Worker Protected Route */}
      <Route
        path="/worker-dashboard"
        element={
          <ProtectedRoute>
            <Navbar /> 
            <WorkerDashboard /> 
            <Footer />
          </ProtectedRoute>
        }
      />

      {/* 4. User Protected Routes */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Navbar /> <Home /> <Footer />
          </ProtectedRoute>
        }
      />

      <Route
        path="/about"
        element={
          <ProtectedRoute>
            <Navbar /> <About /> <Footer />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Navbar /> <Profile /> <Footer />
          </ProtectedRoute>
        }
      />

      <Route
        path="/contact"
        element={
          <ProtectedRoute>
            <Navbar /> <Contact /> <Footer />
          </ProtectedRoute>
        }
      />

      {/* 5. Fallback: Redirect unknown URLs back to the start */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;