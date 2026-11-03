import React, { useState, useEffect } from 'react'
import logo from "../../assets/logo/logo.png"
import { FaPhone, FaWhatsapp, FaTimes, FaBars, FaGlobe } from 'react-icons/fa'
import { useTranslation } from '../../context/TranslationContext'
import { TranslatableText } from '../../utils/TranslatableText'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('/')
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false)
  const { currentLanguage, changeLanguage, languageList } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    
    // Set active link based on current path
    setActiveLink(window.location.pathname)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigate = (path) => {
    window.location.href = path
    setActiveLink(path)
    setMenuOpen(false)
  }

  const handleCall = () => {
    window.location.href = 'tel:+819080787886'
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/+819080787886', '_blank')
  }

  const navLinks = [
    { label: 'Home', path: '/', translateLabel: 'Home' },
    { label: 'About Us', path: '/about', translateLabel: 'About Us' },
    { label: 'Courses', path: '/courses', translateLabel: 'Courses' },
    { label: 'Education & Visa', path: '/educationandvisa', translateLabel: 'Education & Visa' },
    { label: 'Testimonials', path: '/testimonials', translateLabel: 'Testimonials' },
  ]

  // Close language dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      setLanguageDropdownOpen(false)
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white/90 backdrop-blur-sm shadow-md'
        }`}
        style={{ fontFamily: 'Silom, sans-serif' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <button 
              onClick={() => navigate('/')} 
              className="focus:outline-none transform transition-transform duration-300 hover:scale-105 flex items-center gap-3"
            >
              <img src={logo} alt="KN Japanese Institute" className="h-14 w-auto" />
              <div className="hidden lg:block text-left">
                <div className="text-lg font-bold text-slate-800 leading-tight">KN Japanese Institute</div>
                <div className="text-xs text-slate-600">日本語学院</div>
              </div>
            </button>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(({ label, path, translateLabel }) => (
                <button
                  key={path}
                  onClick={() => navigate(path)}
                  className={`relative px-4 py-2 text-base font-medium transition-all duration-300 rounded-lg group ${
                    activeLink === path
                      ? 'text-red-700'
                      : 'text-slate-700 hover:text-red-700'
                  }`}
                >
                  <TranslatableText text={translateLabel} />
                  <span 
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-red-700 to-amber-500 transition-all duration-300 ${
                      activeLink === path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Contact Actions - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language Selector Dropdown */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setLanguageDropdownOpen(!languageDropdownOpen)
                  }}
                  className="flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-slate-700 hover:text-red-700 hover:bg-red-50 transition-all duration-300 rounded-lg"
                  title="Select Language"
                >
                  <FaGlobe className="text-base" />
                  <span className="uppercase text-xs font-bold">{currentLanguage}</span>
                </button>
                
                {languageDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50">
                    {languageList.map(({ code, name }) => (
                      <button
                        key={code}
                        onClick={(e) => {
                          e.stopPropagation()
                          changeLanguage(code)
                          setLanguageDropdownOpen(false)
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                          currentLanguage === code
                            ? 'bg-red-50 text-red-700 border-l-4 border-red-700'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* <button
                onClick={handleCall}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-red-700 transition-all duration-300 rounded-lg hover:bg-red-50"
              >
                <FaPhone className="text-sm" />
                <span>Call</span>
              </button>
               */}
              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <FaWhatsapp className="text-lg" />
                <span><TranslatableText text="WhatsApp" /></span>
              </button>

              <button
                onClick={() => navigate('/contact')}
                className="px-6 py-2.5 text-sm font-bold text-black bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <TranslatableText text="Contact Us" />
              </button>
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-red-700 focus:outline-none transition-colors duration-300"
            >
              {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/98 backdrop-blur-lg border-t border-slate-200 shadow-xl">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map(({ label, path, translateLabel }) => (
                <button
                  key={path}
                  onClick={() => navigate(path)}
                  className={`block w-full text-left px-4 py-3.5 text-base font-medium rounded-lg transition-all duration-300 ${
                    activeLink === path
                      ? 'bg-red-50 text-red-700 shadow-sm'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-red-700'
                  }`}
                >
                  <TranslatableText text={translateLabel} />
                </button>
              ))}
              
              {/* Mobile Contact Actions */}
              
              {/* Mobile Contact Actions */}
              <div className="pt-4 border-t border-slate-200 space-y-2">
                {/* Language Selector Mobile */}
                <div className="mb-3">
                  <p className="px-4 py-2 text-xs font-bold text-slate-600 uppercase">Select Language</p>
                  <div className="space-y-1">
                    {languageList.map(({ code, name }) => (
                      <button
                        key={code}
                        onClick={() => {
                          changeLanguage(code)
                          setMenuOpen(false)
                        }}
                        className={`w-full text-left px-4 py-2.5 text-base font-medium rounded-lg transition-all duration-200 ${
                          currentLanguage === code
                            ? 'bg-red-50 text-red-700 shadow-sm'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* <button
                  onClick={handleCall}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 text-base font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-lg transition-all duration-300"
                >
                  <FaPhone />
                  <span>Call Now</span>
                </button> */}
                
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 text-base font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg transition-all duration-300 shadow-md"
                >
                  <FaWhatsapp className="text-lg" />
                  <span><TranslatableText text="WhatsApp" /></span>
                </button>

                <button
                  onClick={() => navigate('/contact')}
                  className="w-full px-4 py-3 text-base font-bold text-black bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-lg transition-all duration-300 shadow-md"
                >
                  <TranslatableText text="Contact Us" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20"></div>
    </>
  )
}

export default Navbar