import React, { useState } from 'react'
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import { submitContactForm } from '../../apis/Api' // adjust path to match your project structure
import { TranslatableText } from '../../utils/TranslatableText'

function Contact() {
  const phoneNumber = '+819080787886' // Replace with actual phone number

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    if (!formData.firstName.trim()) return 'First name is required'
    if (!formData.lastName.trim()) return 'Last name is required'
    if (!formData.phoneNumber.trim()) return 'Phone number is required'
    if (!formData.email.trim()) return 'Email is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Invalid email format'
    if (!formData.message.trim()) return 'Message is required'
    return ''
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess(false)

    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true)

    try {
      const response = await submitContactForm(formData)

      if (response.data?.status) {
        setSuccess(true)
        setFormData({ firstName: '', lastName: '', phoneNumber: '', email: '', message: '' })
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
        'Failed to send your message. Please check your connection and try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber.replace(/\s/g, '')}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50" style={{ fontFamily: 'Silom, sans-serif' }}>

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-[#8B0000] via-[#DC143C] to-[#8B0000] text-white overflow-hidden">
        {/* Background Glow Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFD700] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold border border-white/30" style={{ fontFamily: 'Silom, sans-serif' }}>
              <TranslatableText text="Get In Touch" />
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ fontFamily: 'Silom, sans-serif' }}>
            <TranslatableText text="Contact Us" />
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90" style={{ fontFamily: 'Silom, sans-serif' }}>
            <TranslatableText text="Get in touch with KN Japanese Institute — we're here to answer your questions and help you start your journey to Japan" />
          </p>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD700]/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DC143C]/10 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Contact Information */}
            <div className="space-y-8 animate-slideInLeft">
              <div>
                <span className="inline-block px-6 py-2 bg-[#DC143C]/10 text-[#DC143C] rounded-full text-sm font-semibold mb-4" style={{ fontFamily: 'Silom, sans-serif' }}>
                  <TranslatableText text="LET'S CONNECT" />
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4" style={{ fontFamily: 'Silom, sans-serif' }}>
                  <TranslatableText text="We'd Love to Hear From You" />
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Silom, sans-serif' }}>
                  <TranslatableText text="Have questions about our Japanese language courses or visa services? Reach out and our team will get back to you shortly." />
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-5">
                <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-2 border-transparent hover:border-[#DC143C]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#DC143C] to-[#8B0000] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6 flex-shrink-0">
                      <FaPhone className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 mb-1" style={{ fontFamily: 'Silom, sans-serif' }}><TranslatableText text="PHONE" /></h3>
                      <a href={`tel:${phoneNumber}`} className="text-xl font-bold text-gray-800 hover:text-[#DC143C] transition-colors" style={{ fontFamily: 'Silom, sans-serif' }}>
                        {phoneNumber}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-2 border-transparent hover:border-[#DC143C]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6 flex-shrink-0">
                      <FaWhatsapp className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 mb-1" style={{ fontFamily: 'Silom, sans-serif' }}><TranslatableText text="WHATSAPP" /></h3>
                      <button onClick={handleWhatsApp} className="text-xl font-bold text-gray-800 hover:text-[#DC143C] transition-colors" style={{ fontFamily: 'Silom, sans-serif' }}>
                        <TranslatableText text="Message Us" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-2 border-transparent hover:border-[#DC143C]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6 flex-shrink-0">
                      <FaEnvelope className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 mb-1" style={{ fontFamily: 'Silom, sans-serif' }}><TranslatableText text="EMAIL" /></h3>
                      <a href="mailto:info@knjapanese.lk" className="text-xl font-bold text-gray-800 hover:text-[#DC143C] transition-colors" style={{ fontFamily: 'Silom, sans-serif' }}>
                        kn.institute.jp@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-2 border-transparent hover:border-[#DC143C]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#DC143C] to-[#8B0000] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6 flex-shrink-0">
                      <FaMapMarkerAlt className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 mb-1" style={{ fontFamily: 'Silom, sans-serif' }}><TranslatableText text="LOCATION" /></h3>
                      <p className="text-xl font-bold text-gray-800" style={{ fontFamily: 'Silom, sans-serif' }}>
                        <TranslatableText text="46/9 PALLADENIYA ROAD, KEGALLE, Sri Lanka" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative animate-slideInRight">
              <div className="bg-white p-8 rounded-2xl shadow-2xl border-2 border-transparent hover:border-[#DC143C]/20 transition-all duration-500">
                <h3 className="text-2xl font-bold text-[#8B0000] mb-6" style={{ fontFamily: 'Silom, sans-serif' }}>
                  <TranslatableText text="Send us a Message" />
                </h3>

                {success && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                    <p className="text-green-700 font-semibold" style={{ fontFamily: 'Silom, sans-serif' }}>
                      <TranslatableText text="Thank you! Your message has been sent successfully." />
                    </p>
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-700 font-semibold" style={{ fontFamily: 'Silom, sans-serif' }}><TranslatableText text={error} /></p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Silom, sans-serif' }}><TranslatableText text="First Name *" /></label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DC143C] focus:border-transparent transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Silom, sans-serif' }}><TranslatableText text="Last Name *" /></label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DC143C] focus:border-transparent transition-all"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Silom, sans-serif' }}><TranslatableText text="Phone Number *" /></label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DC143C] focus:border-transparent transition-all"
                        placeholder="001 234 5678"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Silom, sans-serif' }}><TranslatableText text="Email Address *" /></label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DC143C] focus:border-transparent transition-all"
                        placeholder="john.smith@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Silom, sans-serif' }}><TranslatableText text="Message *" /></label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DC143C] focus:border-transparent transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative w-full flex items-center justify-center gap-2 bg-[#FFD700] hover:bg-[#FFA500] text-[#8B0000] px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    style={{ fontFamily: 'Silom, sans-serif' }}
                  >
                    <FaPaperPlane className={loading ? 'animate-pulse' : ''} />
                    <span><TranslatableText text={loading ? 'Sending...' : 'Send Message'} /></span>
                  </button>
                </form>

                <p className="mt-4 text-xs text-gray-500 text-center" style={{ fontFamily: 'Silom, sans-serif' }}>
                  <TranslatableText text="* Required fields. Your information is secure and will never be shared." />
                </p>
              </div>

              {/* Decorative Elements matching About page */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#FFD700] rounded-full opacity-20 animate-pulse -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#DC143C] rounded-full opacity-20 animate-pulse -z-10" style={{ animationDelay: '0.5s' }}></div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact