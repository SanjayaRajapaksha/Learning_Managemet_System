import React from 'react'
import logo from "../../assets/logo/logo.png"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaWhatsapp, FaArrowUp, FaTiktok } from 'react-icons/fa'

function Footer() {
  const navigate = (path) => {
    window.location.href = path
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Courses', path: '/courses' },
    { label: 'Education & Visa', path: '/educationandvisa' },
  ]

  const resources = [
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Contact Us', path: '/contact' },
    // { label: 'Gallery', path: '/gallery' },
    // { label: 'FAQ', path: '/faq' },
  ]

  const socialLinks = [
    { icon: FaFacebook, url: 'https://www.facebook.com/share/1Esbc7384h/?mibextid=wwXIfr', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: FaTiktok, url: 'https://www.tiktok.com/@kn.japanese.insti4?_r=1&_t=ZS-97QOwGtLtnI', label: 'TikTok', color: 'hover:bg-black' },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-black via-red-950 to-black text-white overflow-hidden" style={{ fontFamily: 'Silom, sans-serif' }}>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <button onClick={() => navigate('/')} className="focus:outline-none mb-6 transform transition-transform hover:scale-105">
              <img src={logo} alt="KN Japanese Institute" className="h-16 w-auto" />
            </button>
            <h3 className="text-xl font-bold mb-3">KN Japanese Institute</h3>
            <p className="text-2xl mb-4 text-amber-400">日本語学院</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your gateway to mastering Japanese language and achieving your dreams of studying and working in Japan.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, url, label, color }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-slate-700/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${color} border border-slate-600 hover:border-transparent`}
                  aria-label={label}
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-amber-400 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-amber-400"></span>
              Quick Links
            </h3>
            <div className="space-y-3">
              {quickLinks.map(({ label, path }) => (
                <button
                  key={path}
                  onClick={() => navigate(path)}
                  className="block text-slate-400 text-sm hover:text-white hover:translate-x-2 transition-all duration-300 bg-transparent border-none cursor-pointer text-left w-fit"
                >
                  › {label}
                </button>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-amber-400 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-amber-400"></span>
              Resources
            </h3>
            <div className="space-y-3">
              {resources.map(({ label, path }) => (
                <button
                  key={path}
                  onClick={() => navigate(path)}
                  className="block text-slate-400 text-sm hover:text-white hover:translate-x-2 transition-all duration-300 bg-transparent border-none cursor-pointer text-left w-fit"
                >
                  › {label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-amber-400 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-amber-400"></span>
              Contact Us
            </h3>
            <div className="space-y-4">
              
              <div className="flex items-start gap-3 group">
                <div className="mt-1 w-10 h-10 rounded-lg bg-red-600/20 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                  <FaMapMarkerAlt className="text-red-400 group-hover:text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-slate-400 text-sm leading-relaxed">
                    46/9 PALLADENIYA ROAD, KEGALLE, Sri Lanka
                  </p>
                </div>
              </div>

              <a 
                href="tel:+819080787886"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-red-600/20 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                  <FaPhone className="text-red-400 group-hover:text-white" />
                </div>
                <span className="text-slate-400 text-sm group-hover:text-white transition-colors">
                  +81 90 8078 7886
                </span>
              </a>

              <a 
                href="https://wa.me/+819080787886"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-red-600/20 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                  <FaWhatsapp className="text-red-400 group-hover:text-white" />
                </div>
                <span className="text-slate-400 text-sm group-hover:text-white transition-colors">
                  WhatsApp Us
                </span>
              </a>

              <a 
                href="mailto:snimesha1212@gmail.com"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-600/20 flex items-center justify-center group-hover:bg-amber-600 transition-colors duration-300">
                  <FaEnvelope className="text-amber-400 group-hover:text-white" />
                </div>
                <span className="text-slate-400 text-sm group-hover:text-white transition-colors">
                  kn.institute.jp@gmail.com
                </span>
              </a>

            </div>
          </div>

        </div>

        {/* Divider with gradient */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm text-center md:text-left">
           Copyright © {new Date().getFullYear()} <span className="text-white font-semibold">NexOra</span>. All rights reserved.
          </p>
          
          {/* <div className="flex items-center gap-6">
            <button
              onClick={() => navigate('/privacy-policy')}
              className="text-slate-400 text-sm hover:text-white transition-colors bg-transparent border-none cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={() => navigate('/terms-of-service')}
              className="text-slate-400 text-sm hover:text-white transition-colors bg-transparent border-none cursor-pointer"
            >
              Terms of Service
            </button>
          </div> */}

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-white" />
          </button>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 bg-gradient-to-r from-red-700 via-amber-500 to-red-700"></div>

    </footer>
  )
}

export default Footer