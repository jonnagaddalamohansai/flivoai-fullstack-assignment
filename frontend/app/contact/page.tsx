"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#e0f2ff] to-[#a8d8ff]">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-12 py-5 bg-white shadow-sm">
        <div className="text-2xl font-semibold italic">Logo</div>
        <div className="flex items-center space-x-8 text-sm font-medium text-gray-700">
          <a href="#">Home</a>
          <div className="relative group">
            <a href="#" className="flex items-center gap-1">
              Services <span className="text-xs">▼</span>
            </a>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 py-2">
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">
                Web Security Audits
              </a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-100">
                Cloud Security
              </a>
            </div>
          </div>
          <a href="#">Blogs</a>
        </div>
        <button className="bg-blue-600 text-white py-2 px-5 rounded-full hover:bg-blue-700 flex items-center gap-2 shadow-sm">
          📞 Contact us
        </button>
      </nav>

      {/* Contact Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-16 py-20 items-start">
        {/* Left Info */}
        <div>
          <p className="text-sm font-semibold text-gray-600">Contact us</p>
          <h1 className="text-4xl font-bold text-blue-700 mb-3">
            Let’s Secure Your Business
          </h1>
          <p className="text-gray-700 mb-6 leading-relaxed max-w-lg">
            Have questions about our services or need a custom security
            solution? Fill out the form and our team will get back to you within
            24 hours.
          </p>

          <div className="space-y-3 text-gray-700">
            <p>📧 <a href="mailto:email@example.com" className="text-blue-600 hover:underline">email@example.com</a></p>
            <p>📞 <a href="tel:+15550000000" className="text-blue-600 hover:underline">+1 (555) 000-0000</a></p>
            <p>📍 123 Sample St, Sydney NSW 2000 AU</p>
          </div>

          <Image
            src="/images/contact-bg.png"
            alt="Security Icon"
            width={320}
            height={320}
            className="mt-10 mx-auto"
          />
        </div>

        {/* Right Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone number" />
          </div>

          <fieldset className="space-y-2">
            <legend className="text-sm font-medium text-gray-700">Service Type?</legend>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <label className="flex items-center gap-2">
                <input type="radio" name="service" required /> Web Application Security Audits
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="service" /> PCI DSS Gap Assessments
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="service" /> Cloud Security Assessments
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="service" /> Security Awareness Training
              </label>
            </div>
          </fieldset>

          <textarea placeholder="Type your message..." className="w-full" />

          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" required />
            <label>I accept the <a href="#" className="text-blue-600 hover:underline">Terms</a></label>
          </div>

          <button type="submit" className="btn-primary">Book your call</button>
        </form>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial text-center py-16 bg-gray-50 border-t border-gray-200">
        <div className="flex flex-col items-center">
          <p className="font-semibold text-gray-700 mb-2">Webflow</p>
          <p className="text-lg max-w-2xl mx-auto text-gray-800 mb-5">
            "Security Council transformed our cybersecurity posture, providing
            invaluable insights and support that exceeded our expectations."
          </p>
          <div className="text-sm text-gray-600">
            <p className="font-medium">John Doe</p>
            <p>CISO, TechCorp</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-sm text-gray-600 bg-white">
        <div className="flex justify-center gap-6 mb-2">
          <a href="#">Contact Us</a>
          <a href="#">About Us</a>
          <a href="#">Our Services</a>
          <a href="#">Blog Insights</a>
        </div>
        <p className="text-gray-500">
          © 2025 Security Council. All rights reserved. |{" "}
          <a href="#" className="hover:underline">Privacy Policy</a> |{" "}
          <a href="#" className="hover:underline">Terms of Use</a> |{" "}
          <a href="#" className="hover:underline">Cookie Policy</a>
        </p>
      </footer>

      {/* Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              Let’s Secure Your Business
            </h2>
            <p className="text-gray-700 mb-5">
              Our team will get back to you within 24 hours.
            </p>
            <div className="flex justify-center gap-6 mb-6">
              <Image src="/images/contact-bg.png" alt="Shield" width={80} height={80} />
              <Image src="/images/contact-bg.png" alt="Secure" width={80} height={80} />
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="btn-primary"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
