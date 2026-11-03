import React from "react";
import bannerImage from "../../assets/kn ss1.png";
import {
  FaPhone,
  FaWhatsapp,
  FaGraduationCap,
  FaBook,
  FaGlobe,
  FaUserTie,
  FaAward,
  FaCertificate,
} from "react-icons/fa";
import { TranslatableText } from "../../utils/TranslatableText";

function Home() {
  const phoneNumber = "+819080787886"; // Replace with actual phone number

  const handleCallNow = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber.replace(/\s/g, "")}`, "_blank");
  };

  const handleApplyNow = () => {
    // Navigate to contact or application page
    window.location.href = "/contact";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div
          className="absolute inset-0 z-0 transition-transform duration-300"
          style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center 60%",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Japanese Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-red-950/80 to-black/85"></div>

          {/* Animated Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto animate-fadeIn">
          {/* Accent Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8 animate-pulse"></div>

          {/* School Name */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight drop-shadow-2xl"
            style={{ fontFamily: "Silom, sans-serif" }}
          >
            KN Japanese Institute
          </h1>
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-8 drop-shadow-xl"
            style={{ fontFamily: "Silom, sans-serif" }}
          >
            KN 日本語学院
          </h2>

          {/* Tagline with Japanese Styling */}
          <div className="inline-block bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-amber-400/30 mb-10">
            <p
              className="text-2xl md:text-4xl lg:text-5xl font-medium text-amber-300 drop-shadow-lg"
              style={{ fontFamily: "Noto Sans Sinhala, sans-serif" }}
            >
              <TranslatableText text="Making Your Dreams a Reality" />
            </p>
          </div>

          {/* Phone Number with Japanese Design */}
          {/* <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-lg px-6 py-3 rounded-full mb-10 border border-amber-400/30 hover:bg-white/20 transition-all duration-300">
            <div className="bg-amber-500 p-2 rounded-full">
              <FaPhone className="text-xl text-black" />
            </div>
            <a 
              href={`tel:${phoneNumber}`} 
              className="text-xl md:text-2xl font-semibold hover:text-amber-300 transition-colors"
            >
              {phoneNumber}
            </a>
          </div> */}

          {/* CTA Buttons with Modern Design */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center max-w-3xl mx-auto">
            {/* <button
              onClick={handleCallNow}
              className="group relative flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <FaPhone className="relative z-10" />
              <span className="relative z-10">Call Now</span>
            </button> */}

            <button
              onClick={handleWhatsApp}
              className="group relative flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <FaWhatsapp className="text-2xl relative z-10" />
              <span
                className="relative z-10"
                style={{ fontFamily: "Silom, sans-serif" }}
              >
                <TranslatableText text="WhatsApp" />
              </span>
            </button>

            {/* <button
              onClick={handleApplyNow}
              className="group relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <span className="relative z-10">Apply Now</span>
            </button> */}
          </div>
        </div>

        {/* Japanese Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-3 border-white/50 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
            <div className="w-1.5 h-3 bg-amber-400 rounded-full mt-3 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span
              className="inline-block px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-semibold mb-4"
              style={{ fontFamily: "Silom, sans-serif" }}
            >
              <TranslatableText text="WHY CHOOSE US" />
            </span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4"
              style={{ fontFamily: "Silom, sans-serif" }}
            >
              <TranslatableText text="Your Success is Our Mission" />
            </h2>
            <p
              className="text-xl text-slate-600 max-w-3xl mx-auto"
              style={{ fontFamily: "Silom, sans-serif" }}
            >
              <TranslatableText text="Professional Japanese language training with comprehensive support for your journey to Japan" />
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
              <div className="bg-gradient-to-br from-red-600 to-red-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaGraduationCap className="text-3xl text-white" />
              </div>
              <h3
                className="text-2xl font-bold text-slate-800 mb-3"
                style={{ fontFamily: "Silom, sans-serif" }}
              >
                <TranslatableText text="Expert Instructors" />
              </h3>
              <p
                className="text-slate-600 leading-relaxed"
                style={{ fontFamily: "Silom, sans-serif" }}
              >
                <TranslatableText text="Learn from highly qualified and experienced Japanese language instructors with proven teaching methodologies." />
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
              <div className="bg-gradient-to-br from-amber-600 to-amber-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaCertificate className="text-3xl text-white" />
              </div>
              <h3
                className="text-2xl font-bold text-slate-800 mb-3"
                style={{ fontFamily: "Silom, sans-serif" }}
              >
                <TranslatableText text="JLPT Preparation" />
              </h3>
              <p
                className="text-slate-600 leading-relaxed"
                style={{ fontFamily: "Silom, sans-serif" }}
              >
                <TranslatableText text="Comprehensive exam preparation courses designed to help you excel in JLPT certification exams." />
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
              <div className="bg-gradient-to-br from-red-700 to-red-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaGlobe className="text-3xl text-white" />
              </div>
              <h3
                className="text-2xl font-bold text-slate-800 mb-3"
                style={{ fontFamily: "Silom, sans-serif" }}
              >
                <TranslatableText text="Visa Guidance" />
              </h3>
              <p
                className="text-slate-600 leading-relaxed"
                style={{ fontFamily: "Silom, sans-serif" }}
              >
                <TranslatableText text="Complete visa application support and guidance to ensure a smooth process for studying in Japan." />
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
              <div className="bg-gradient-to-br from-amber-700 to-amber-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaUserTie className="text-3xl text-white" />
              </div>
              <h3
                className="text-2xl font-bold text-slate-800 mb-3"
                style={{ fontFamily: "Silom, sans-serif" }}
              >
                <TranslatableText text="Job Placement" />
              </h3>
              <p
                className="text-slate-600 leading-relaxed"
                style={{ fontFamily: "Silom, sans-serif" }}
              >
                <TranslatableText text="Professional career guidance and job placement assistance to help you succeed in Japan." />
              </p>
            </div>

            {/* Feature Card 5 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
              <div className="bg-gradient-to-br from-red-800 to-red-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaBook className="text-3xl text-white" />
              </div>
              <h3
                className="text-2xl font-bold text-slate-800 mb-3"
                style={{ fontFamily: "Silom, sans-serif" }}
              >
                <TranslatableText text="Cultural Training" />
              </h3>
              <p
                className="text-slate-600 leading-relaxed"
                style={{ fontFamily: "Silom, sans-serif" }}
              >
                <TranslatableText text="Immersive cultural programs to help you understand and adapt to Japanese customs and lifestyle." />
              </p>
            </div>

            {/* Feature Card 6 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaAward className="text-3xl text-white" />
              </div>
              <h3
                className="text-2xl font-bold text-slate-800 mb-3"
                style={{ fontFamily: "Silom, sans-serif" }}
              >
                <TranslatableText text="Proven Success" />
              </h3>
              <p
                className="text-slate-600 leading-relaxed"
                style={{ fontFamily: "Silom, sans-serif" }}
              >
                <TranslatableText text="Join hundreds of successful graduates who are now living their dreams in Japan." />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-black via-red-950 to-black relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600 rounded-full filter blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-500 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Silom, sans-serif" }}
          >
            <TranslatableText text="Ready to Start Your Journey?" />
          </h2>
          <p
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto"
            style={{ fontFamily: "Silom, sans-serif" }}
          >
            <TranslatableText text="Join our community of successful students and take the first step towards your dream career in Japan." />
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* <button
              onClick={handleApplyNow}
              className="group relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-12 py-5 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <span className="relative z-10">Enroll Now</span>
            </button> */}

            <button
              onClick={handleApplyNow}
              className="group relative flex items-center gap-3 bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white px-12 py-5 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 border-2 border-white/30 hover:border-white/50"
            >
              <span style={{ fontFamily: "Silom, sans-serif" }}>
                <TranslatableText text="Contact Us" />
              </span>
            </button>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center text-white">
            <span
              className="flex items-center gap-2 text-lg"
              style={{ fontFamily: "Silom, sans-serif" }}
            >
              <FaPhone />
              <span>{phoneNumber}</span>
            </span>
            <span className="hidden sm:block text-slate-500">|</span>
            {/* <button onClick={handleWhatsApp} className="flex items-center gap-2 text-lg hover:text-amber-300 transition-colors"> */}
            <FaWhatsapp className="text-2xl" />
            <span style={{ fontFamily: "Silom, sans-serif" }}><TranslatableText text="WhatsApp Us" /></span>
            {/* </button> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
