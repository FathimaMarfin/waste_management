import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Profile from "./pages/Profile"; // 1. Import Profile page

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn ? children : <Navigate to="/" />;
}

function App() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<Login />} />

      {/* Protected Dashboard Route */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Navbar /> <Home /> <Footer />
          </ProtectedRoute>
        }
      />

      {/* Protected Contact Route */}
      <Route
        path="/contact"
        element={
          <ProtectedRoute>
            <Navbar /> <Contact /> <Footer />
          </ProtectedRoute>
        }
      />

      {/* Protected About Route */}
      <Route
        path="/about"
        element={
          <ProtectedRoute>
            <Navbar /> <About /> <Footer />
          </ProtectedRoute>
        }
      />

      {/* 2. Added Protected Profile Route */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Navbar /> <Profile /> <Footer />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;