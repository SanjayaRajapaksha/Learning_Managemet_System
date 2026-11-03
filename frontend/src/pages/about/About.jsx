import React from 'react'
import { FaGraduationCap, FaCertificate, FaGlobe, FaUserTie, FaAward, FaBook, FaHeart, FaUsers, FaChalkboardTeacher } from 'react-icons/fa'
import image1 from '../../assets/kn ss1.png'
import image2 from '../../assets/kn ss2.png'
import image3 from '../../assets/kn ss3.png'
import image4 from '../../assets/kn ss4.png'
import { TranslatableText } from '../../utils/TranslatableText'

const whyChooseFeatures = [
  {
    icon: FaChalkboardTeacher,
    color: 'from-[#DC143C] to-[#8B0000]',
    title: 'Expert Instructors',
    description: 'Learn from highly qualified and experienced Japanese language teachers with proven methodologies.'
  },
  {
    icon: FaCertificate,
    color: 'from-[#FFD700] to-[#FFA500]',
    title: 'JLPT Success',
    description: 'Comprehensive exam preparation with proven track record of high pass rates in JLPT N5 to N1.'
  },
  {
    icon: FaGlobe,
    color: 'from-[#1a1a2e] to-[#16213e]',
    title: 'Complete Visa Support',
    description: 'End-to-end visa application guidance and documentation support for studying in Japan.'
  },
  {
    icon: FaUserTie,
    color: 'from-[#DC143C] to-[#8B0000]',
    title: 'Job Placement',
    description: 'Career counseling and job placement assistance to help you succeed professionally in Japan.'
  },
  {
    icon: FaBook,
    color: 'from-[#FFD700] to-[#FFA500]',
    title: 'Cultural Training',
    description: 'Immersive cultural programs to understand Japanese customs, etiquette, and lifestyle.'
  },
  {
    icon: FaAward,
    color: 'from-[#1a1a2e] to-[#16213e]',
    title: 'Proven Track Record',
    description: 'Join hundreds of successful students who achieved their Japanese dreams through KNJI.'
  }
]

const galleryItems = [
  {
    src: image4,
    alt: 'KNJI Campus',
    overlay: 'from-[#8B0000]/80',
    title: 'Our Campus',
    caption: 'Modern facilities for optimal learning'
  },
  {
    src: image2,
    alt: 'KNJI Classroom',
    overlay: 'from-[#DC143C]/80',
    title: 'Learning Spaces',
    caption: 'Comfortable and equipped classrooms'
  },
  {
    src: image3,
    alt: 'KNJI Students',
    overlay: 'from-[#1a1a2e]/80',
    title: 'Student Community',
    caption: 'Vibrant learning environment'
  }
]

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50" style={{ fontFamily: 'Silom, sans-serif' }}>

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-[#8B0000] via-[#DC143C] to-[#8B0000] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFD700] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold border border-white/30" style={{ fontFamily: 'Silom, sans-serif' }}>
              <TranslatableText text="About Our Institute" />
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fadeIn" style={{ fontFamily: 'Silom, sans-serif' }}>
            <TranslatableText text="KN Japanese Institute" />
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-[#FFD700]" style={{ fontFamily: 'Silom, sans-serif' }}>
            KN 日本語学院
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90" style={{ fontFamily: 'Silom, sans-serif' }}>
            <TranslatableText text="Your Trusted Partner in Achieving Japanese Education and Career Dreams" />
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Institute Introduction */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slideInLeft">
              <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-6" style={{ fontFamily: 'Silom, sans-serif' }}>
                <TranslatableText text="Welcome to KNJI" />
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Silom, sans-serif' }}>
                <strong className="text-[#DC143C]">KN Japanese Institute (KNJI)</strong>{' '}
                <TranslatableText text="is a premier Japanese language school and consultancy dedicated to making your dreams of studying and working in Japan a reality." />
              </p>
              <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Silom, sans-serif' }}>
                <TranslatableText text="We provide high-quality Japanese language education, accurate guidance, and continuous support throughout your journey. Our experienced instructors and comprehensive programs ensure you're well-prepared for both JLPT examinations and real-world Japanese communication." />
              </p>
              <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Silom, sans-serif' }}>
                <TranslatableText text="With a proven track record of successful placements and satisfied students, KNJI has become the trusted choice for Sri Lankan youth seeking opportunities in Japan." />
              </p>
            </div>

            <div className="relative animate-slideInRight">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                <img src={image4} alt="KN Japanese Institute" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8B0000]/50 to-transparent"></div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#FFD700] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#DC143C] rounded-full opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, #FFD700 2px, transparent 2px), radial-gradient(circle at 80% 80%, #FFD700 2px, transparent 2px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-0.5 bg-[#FFD700]"></span>
              <FaGlobe className="text-4xl text-[#FFD700]" />
              <span className="w-12 h-0.5 bg-[#FFD700]"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Silom, sans-serif' }}>
              <TranslatableText text="Our Vision" />
            </h2>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl hover:shadow-[0_0_50px_rgba(255,215,0,0.3)] transition-all duration-500">
            <p className="text-xl md:text-2xl leading-relaxed text-center" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
              <TranslatableText text='"To become a leading Japanese language institute and consultancy, empowering Sri Lankan students to achieve their educational and professional dreams in Japan."' />
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#DC143C] to-[#8B0000] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FFD700] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-0.5 bg-[#FFD700]"></span>
              <FaHeart className="text-4xl text-[#FFD700]" />
              <span className="w-12 h-0.5 bg-[#FFD700]"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Silom, sans-serif' }}>
              <TranslatableText text="Our Mission" />
            </h2>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl hover:shadow-[0_0_50px_rgba(255,215,0,0.3)] transition-all duration-500">
            <p className="text-xl md:text-2xl leading-relaxed text-center" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
              <TranslatableText text='"At KN Japanese Institute (KNJI), we provide quality Japanese language education, expert guidance, and continuous support to help students turn their academic and career aspirations in Japan into reality."' />
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-[#DC143C]/10 text-[#DC143C] rounded-full text-sm font-semibold mb-4" style={{ fontFamily: 'Silom, sans-serif' }}>
              <TranslatableText text="WHY CHOOSE KNJI" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4" style={{ fontFamily: 'Silom, sans-serif' }}>
              <TranslatableText text="What Makes Us Special" />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Silom, sans-serif' }}>
              <TranslatableText text="Discover the advantages of learning Japanese with the best institute in Sri Lanka" />
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#DC143C]">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6`}>
                  <feature.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3" style={{ fontFamily: 'Silom, sans-serif' }}>
                  <TranslatableText text={feature.title} />
                </h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Silom, sans-serif' }}>
                  <TranslatableText text={feature.description} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institute Images Gallery */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-[#DC143C]/10 text-[#DC143C] rounded-full text-sm font-semibold mb-4" style={{ fontFamily: 'Silom, sans-serif' }}>
              <TranslatableText text="OUR INSTITUTE" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4" style={{ fontFamily: 'Silom, sans-serif' }}>
              <TranslatableText text="Explore Our Facilities" />
            </h2>
            <p className="text-xl text-gray-600" style={{ fontFamily: 'Silom, sans-serif' }}>
              <TranslatableText text="A glimpse into our modern learning environment" />
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <img src={item.src} alt={item.alt} className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className={`absolute inset-0 bg-gradient-to-t ${item.overlay} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6`}>
                  <div>
                    <h3 className="text-white text-2xl font-bold mb-2" style={{ fontFamily: 'Silom, sans-serif' }}>
                      <TranslatableText text={item.title} />
                    </h3>
                    <p className="text-white/90" style={{ fontFamily: 'Silom, sans-serif' }}>
                      <TranslatableText text={item.caption} />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#8B0000] via-[#DC143C] to-[#8B0000] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FFD700] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FaUsers className="text-6xl text-[#FFD700] mx-auto mb-6 animate-bounce" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Silom, sans-serif' }}>
            <TranslatableText text="Ready to Start Your Journey?" />
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90" style={{ fontFamily: 'Silom, sans-serif' }}>
            <TranslatableText text="Join KNJI today and take the first step towards your Japanese dream" />
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button
              onClick={() => window.location.href = '/contact'}
              className="px-10 py-5 bg-[#FFD700] hover:bg-[#FFA500] text-[#8B0000] rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-[0_0_30px_rgba(255,215,0,0.5)]"
              style={{ fontFamily: 'Silom, sans-serif' }}
            >
              <TranslatableText text="Contact Us Now" />
            </button>
            <button
              onClick={() => window.location.href = '/courses'}
              className="px-10 py-5 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-110 border-2 border-white/50"
              style={{ fontFamily: 'Silom, sans-serif' }}
            >
              <TranslatableText text="View Courses" />
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About