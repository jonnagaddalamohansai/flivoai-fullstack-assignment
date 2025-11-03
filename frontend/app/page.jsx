"use client";
import { useState } from "react";

export default function Page() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#E5F5FF] via-[#8BD1FF] to-[#E5F5FF] text-[#1e293b] font-sans">
      {/* ✅ Navbar */}
      <header className="flex justify-between items-center py-4 px-16 bg-white shadow-sm">
        <div className="text-2xl font-bold text-blue-600">Logo</div>
        <nav className="flex items-center gap-8 text-sm">
          <a href="#">Home</a>
          <a href="#">Services ▾</a>
          <a href="#">Blogs</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700 transition">
            📞 Contact us
          </button>
        </nav>
      </header>

      {/* ✅ Contact Section */}
      <section className="flex justify-between items-start max-w-6xl mx-auto mt-16 px-8">
        {/* Left Side */}
        <div className="w-1/2 pr-12">
          <h5 className="text-sm text-gray-600 mb-2">Contact us</h5>
          <h1 className="text-4xl font-bold text-[#2563eb] mb-4">
            Let’s Secure Your Business
          </h1>
          <p className="text-gray-600 mb-6">
            Have questions about our services or need a custom security solution?
            Fill out the form and our team will get back to you within 24 hours.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li>📧 email@example.com</li>
            <li>📞 +1 (555) 000-0000</li>
            <li>📍 123 Sample St, Sydney NSW 2000 AU</li>
          </ul>

          {/* Shield Image */}
          <div className="mt-10 flex justify-center">
            <div className="bg-gradient-to-br from-blue-400 to-blue-900 w-56 h-56 rounded-full flex items-center justify-center shadow-2xl">
              <img
                src="/frame 363.png"
                alt="shield"
                className="w-24 h-24 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <form onSubmit={handleSubmit} className="w-1/2 grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First name"
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Last name"
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
            required
          />
          <input
            type="tel"
            placeholder="Phone number"
            className="border p-2 rounded"
            required
          />

          <div className="col-span-2 space-y-2">
            <label className="block text-sm font-semibold">Service Type?</label>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <label><input type="radio" name="service" /> Web Application Security Audits</label>
              <label><input type="radio" name="service" /> PCI DSS Gap Assessments</label>
              <label><input type="radio" name="service" /> Cloud Security Assessments</label>
              <label><input type="radio" name="service" /> Security Awareness Training</label>
            </div>
          </div>

          <textarea
            placeholder="Type your message..."
            className="col-span-2 border p-2 rounded h-28"
            required
          ></textarea>

          <div className="col-span-2 flex items-center gap-2">
            <input type="checkbox" required />{" "}
            <span className="text-sm">
              I accept the{" "}
              <a href="#" className="text-blue-600">
                Terms
              </a>
            </span>
          </div>

          <button
            type="submit"
            className="col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Book your call
          </button>
        </form>
      </section>

      {/* ✅ Footer */}
      <footer className="mt-20 border-t text-center text-gray-600 text-sm py-6">
        <div className="flex justify-center gap-8 mb-4">
          <a href="#">Contact Us</a>
          <a href="#">About Us</a>
          <a href="#">Our Services</a>
          <a href="#">Blog Insights</a>
        </div>
        <p>© 2025 Security Council. All rights reserved.</p>
        <p className="mt-2 text-xs">
          <a href="#" className="mx-2">
            Privacy Policy
          </a>{" "}
          |
          <a href="#" className="mx-2">
            Terms of Use
          </a>{" "}
          |
          <a href="#" className="mx-2">
            Cookie Policy
          </a>
        </p>
      </footer>

      {/* ✅ Popup Message */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-50 animate-fadeIn">
          <div className="bg-white p-10 rounded-2xl shadow-2xl border-2 border-blue-400 text-center max-w-sm mx-auto animate-pop">
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">
              🎉 Thank You!
            </h3>
            <p className="text-gray-700">
              Your booking has been received. Our team will contact you soon.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
