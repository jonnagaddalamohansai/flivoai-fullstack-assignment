import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ContactPage from "./pages/ContactPage";

// ✅ Optional: Simple Home Page
const HomePage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-100 to-indigo-200 p-6">
    <h1 className="text-4xl font-bold text-indigo-700 mb-4">Welcome to Flivo</h1>
    <p className="text-gray-600 mb-6 text-center max-w-md">
      This is your Flivo frontend. Navigate to the Contact page to test your form.
    </p>
    <Link
      to="/contact"
      className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
    >
      Go to Contact Page
    </Link>
  </div>
);

const App = () => {
  return (
    <Router>
      {/* ✅ Simple Navigation Bar */}
      <nav className="bg-indigo-700 text-white py-4 px-8 flex justify-between items-center shadow-lg">
        <h2 className="text-xl font-bold">Flivo</h2>
        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
        </div>
      </nav>

      {/* ✅ Page Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* ✅ Footer */}
      <footer className="bg-gray-100 py-4 mt-10 text-center text-gray-600 border-t">
        © {new Date().getFullYear()} Flivo. All rights reserved.
      </footer>
    </Router>
  );
};

export default App;
