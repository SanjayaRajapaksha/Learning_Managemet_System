import React from 'react'
import { FaGraduationCap, FaPassport, FaPlane, FaFileAlt, FaCheckCircle, FaUniversity, FaBriefcase, FaHandshake, FaUserCheck, FaMapMarkerAlt, FaClipboardCheck } from 'react-icons/fa'
import { TranslatableText } from '../../utils/TranslatableText'

function Education() {
  const educationServices = [
    {
      icon: FaUniversity,
      title: 'University Selection',
      description: 'Expert guidance in selecting the best Japanese universities and language schools based on your goals and qualifications.'
    },
    {
      icon: FaFileAlt,
      title: 'Application Assistance',
      description: 'Complete support with university applications, documentation, and submission process to ensure success.'
    },
    {
      icon: FaPassport,
      title: 'Visa Processing',
      description: 'End-to-end visa application support including COE (Certificate of Eligibility) and student visa processing.'
    },
    {
      icon: FaPlane,
      title: 'Pre-Departure Guidance',
      description: 'Comprehensive orientation on Japanese culture, accommodation, and essential information before your departure.'
    },
    {
      icon: FaBriefcase,
      title: 'Job Assistance',
      description: 'Career counseling and part-time job guidance to support your studies in Japan.'
    },
    {
      icon: FaHandshake,
      title: 'Ongoing Support',
      description: 'Continuous assistance even after you arrive in Japan to ensure a smooth transition.'
    }
  ]

  const visaSteps = [
    { step: '01', title: 'Initial Consultation', description: 'Meet with our counselors to discuss your education goals' },
    { step: '02', title: 'University Selection', description: 'Choose the right institution matching your profile' },
    { step: '03', title: 'Document Preparation', description: 'Gather and prepare all required documents' },
    { step: '04', title: 'Application Submission', description: 'Submit applications to selected institutions' },
    { step: '05', title: 'COE Processing', description: 'Obtain Certificate of Eligibility from Japan' },
    { step: '06', title: 'Visa Application', description: 'Apply for student visa at Japanese Embassy' },
    { step: '07', title: 'Pre-Departure', description: 'Final preparations and orientation before departure' },
    { step: '08', title: 'Arrival Support', description: 'Assistance upon arrival in Japan' }
  ]

  const whyChooseUs = [
    {
      title: 'High Success Rate',
      description: 'We have a proven track record of successful visa applications with minimal rejections due to our thorough documentation process.'
    },
    {
      title: 'Expert Guidance',
      description: 'Our experienced counselors have in-depth knowledge of Japanese immigration requirements and procedures.'
    },
    {
      title: 'Complete Documentation Support',
      description: 'We handle all paperwork and ensure your documents meet Japanese immigration standards perfectly.'
    },
    {
      title: 'Post-Arrival Support',
      description: "Our support doesn't end with visa approval - we assist you even after you reach Japan."
    }
  ]

  const tokyoFeatures = [
    'Top-tier language schools',
    'Part-time job opportunities',
    'Modern city life'
  ]

  const nagoyaFeatures = [
    'Affordable living costs',
    'Manufacturing jobs',
    'Central location'
  ]

  const osakaFeatures = [
    'Friendly environment',
    'Rich cultural heritage',
    'Lower living expenses'
  ]

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
            <span className="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold border border-white/30">
              <TranslatableText text="Your Gateway to Japan" />
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fadeIn" style={{ fontFamily: 'Silom, sans-serif' }}>
            <TranslatableText text="Education & Visa Services" />
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
            <TranslatableText text="Comprehensive support for your Japanese education journey from application to arrival" />
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-[#DC143C]/10 text-[#DC143C] rounded-full text-sm font-semibold mb-4">
              <TranslatableText text="WHAT WE OFFER" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4" style={{ fontFamily: 'Silom, sans-serif' }}>
              <TranslatableText text="Our Education Services" />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <TranslatableText text="Complete assistance for studying in Japan" />
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationServices.map((service, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#DC143C]">
                <div className="w-16 h-16 bg-gradient-to-br from-[#DC143C] to-[#8B0000] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
                  <service.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  <TranslatableText text={service.title} />
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  <TranslatableText text={service.description} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Process Steps */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-[#DC143C]/10 text-[#DC143C] rounded-full text-sm font-semibold mb-4">
              <TranslatableText text="DETAILED SERVICES" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4" style={{ fontFamily: 'Silom, sans-serif' }}>
              <TranslatableText text="Japanese Education & Visa Consultation" />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <TranslatableText text="Comprehensive support for your journey to Japan" />
            </p>
          </div>

          {/* Visa Assistance */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-[#8B0000] to-[#DC143C] text-white p-8 rounded-3xl shadow-2xl mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#FFD700] rounded-2xl flex items-center justify-center">
                  <FaPassport className="text-3xl text-[#8B0000]" />
                </div>
                <h3 className="text-3xl font-bold" style={{ fontFamily: 'Silom, sans-serif' }}>
                  <TranslatableText text="Visa Assistance" />
                </h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <FaClipboardCheck className="text-4xl text-[#FFD700] mb-4" />
                  <h4 className="text-xl font-bold mb-3">
                    <TranslatableText text="Visa Process Guidance" />
                  </h4>
                  <p className="text-white/90">
                    <TranslatableText text="Complete step-by-step guidance through the entire visa application process, from initial documentation to final approval." />
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <FaUserCheck className="text-4xl text-[#FFD700] mb-4" />
                  <h4 className="text-xl font-bold mb-3">
                    <TranslatableText text="Interview Preparation" />
                  </h4>
                  <p className="text-white/90">
                    <TranslatableText text="Professional coaching and mock interviews to ensure you're fully prepared for your visa interview at the Japanese Embassy." />
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <FaFileAlt className="text-4xl text-[#FFD700] mb-4" />
                  <h4 className="text-xl font-bold mb-3">
                    <TranslatableText text="Document Preparation" />
                  </h4>
                  <p className="text-white/90">
                    <TranslatableText text="Expert assistance in preparing, organizing, and verifying all required documents to meet Japanese immigration standards." />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Japanese Language School Placement */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white p-8 rounded-3xl shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#FFD700] rounded-2xl flex items-center justify-center">
                  <FaUniversity className="text-3xl text-[#1a1a2e]" />
                </div>
                <h3 className="text-3xl font-bold" style={{ fontFamily: 'Silom, sans-serif' }}>
                  <TranslatableText text="Japanese Language School Placement" />
                </h3>
              </div>
              <p className="text-xl text-white/80 mb-8">
                <TranslatableText text="We assist with placements in top Japanese language schools across major cities:" />
              </p>
              <div className="grid md:grid-cols-3 gap-6">

                {/* Tokyo */}
                <div className="bg-gradient-to-br from-[#DC143C] to-[#8B0000] rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  <FaMapMarkerAlt className="text-5xl text-[#FFD700] mb-4" />
                  <h4 className="text-2xl font-bold mb-3">
                    <TranslatableText text="Tokyo" />
                  </h4>
                  <p className="text-white/90">
                    <TranslatableText text="Japan's capital city - Perfect for those seeking urban experience with countless opportunities for practice and cultural immersion." />
                  </p>
                  <ul className="mt-4 space-y-2 text-white/80">
                    {tokyoFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <FaCheckCircle className="text-[#FFD700] flex-shrink-0" />
                        <TranslatableText text={feature} />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Nagoya */}
                <div className="bg-gradient-to-br from-[#DC143C] to-[#8B0000] rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  <FaMapMarkerAlt className="text-5xl text-[#FFD700] mb-4" />
                  <h4 className="text-2xl font-bold mb-3">
                    <TranslatableText text="Nagoya" />
                  </h4>
                  <p className="text-white/90">
                    <TranslatableText text="Central Japan's industrial hub - Ideal balance of city amenities and authentic Japanese lifestyle at affordable costs." />
                  </p>
                  <ul className="mt-4 space-y-2 text-white/80">
                    {nagoyaFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <FaCheckCircle className="text-[#FFD700] flex-shrink-0" />
                        <TranslatableText text={feature} />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Osaka */}
                <div className="bg-gradient-to-br from-[#DC143C] to-[#8B0000] rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  <FaMapMarkerAlt className="text-5xl text-[#FFD700] mb-4" />
                  <h4 className="text-2xl font-bold mb-3">
                    <TranslatableText text="Osaka" />
                  </h4>
                  <p className="text-white/90">
                    <TranslatableText text="Western Japan's vibrant city - Known for friendly locals, rich culture, and lower living costs compared to Tokyo." />
                  </p>
                  <ul className="mt-4 space-y-2 text-white/80">
                    {osakaFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <FaCheckCircle className="text-[#FFD700] flex-shrink-0" />
                        <TranslatableText text={feature} />
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>

          {/* Eligibility Requirements */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-2xl border-4 border-[#DC143C]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#DC143C] to-[#8B0000] rounded-2xl flex items-center justify-center">
                  <FaClipboardCheck className="text-3xl text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#8B0000]" style={{ fontFamily: 'Silom, sans-serif' }}>
                  <TranslatableText text="Eligibility Requirements" />
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-[#DC143C] to-[#8B0000] text-white rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center text-2xl font-bold text-[#8B0000]">
                      19
                    </div>
                    <h4 className="text-2xl font-bold">
                      <TranslatableText text="Minimum Age Requirement" />
                    </h4>
                  </div>
                  <p className="text-xl text-white/90 leading-relaxed">
                    <TranslatableText text="Applicants must be at least" />{' '}
                    <span className="text-[#FFD700] font-bold text-2xl">19 <TranslatableText text="years old" /></span>{' '}
                    <TranslatableText text="at the time of application to be eligible for Japanese language school admission and student visa processing." />
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center">
                      <FaGraduationCap className="text-2xl text-[#1a1a2e]" />
                    </div>
                    <h4 className="text-2xl font-bold">
                      <TranslatableText text="Educational Qualification" />
                    </h4>
                  </div>
                  <p className="text-xl text-white/90 leading-relaxed">
                    <TranslatableText text="Minimum requirement is" />{' '}
                    <span className="text-[#FFD700] font-bold text-2xl">
                      <TranslatableText text="O/L (GCE Ordinary Level) completion" />
                    </span>
                    {'. '}
                    <TranslatableText text="Applicants must have successfully completed their O/L examinations to qualify for enrollment." />
                  </p>
                </div>
              </div>
              <div className="mt-8 bg-[#FFD700]/10 border-2 border-[#FFD700] rounded-2xl p-6">
                <p className="text-gray-700 text-lg">
                  <strong className="text-[#8B0000]">
                    <TranslatableText text="Important Note:" />
                  </strong>{' '}
                  <TranslatableText text="Meeting these basic requirements is the first step. Additional documentation and qualifications may be required depending on the specific school and program you choose." />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-[#DC143C]/10 text-[#DC143C] rounded-full text-sm font-semibold mb-4">
              <TranslatableText text="STEP-BY-STEP PROCESS" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4" style={{ fontFamily: 'Silom, sans-serif' }}>
              <TranslatableText text="Your Journey to Japan" />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <TranslatableText text="We guide you through every step of the process" />
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visaSteps.map((item, index) => (
              <div key={index} className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#DC143C]/20 hover:border-[#DC143C]">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[#8B0000] mb-2 mt-4">
                  <TranslatableText text={item.title} />
                </h3>
                <p className="text-gray-600 text-sm">
                  <TranslatableText text={item.description} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Visa Services */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, #FFD700 2px, transparent 2px), radial-gradient(circle at 80% 80%, #FFD700 2px, transparent 2px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Silom, sans-serif' }}>
              <TranslatableText text="Why Choose KNJI for Your Visa?" />
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <FaCheckCircle className="text-4xl text-[#FFD700] mb-4" />
                <h3 className="text-2xl font-bold mb-3">
                  <TranslatableText text={item.title} />
                </h3>
                <p className="text-white/80 leading-relaxed">
                  <TranslatableText text={item.description} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#DC143C] to-[#8B0000] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FFD700] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FaGraduationCap className="text-6xl text-[#FFD700] mx-auto mb-6 animate-bounce" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Silom, sans-serif' }}>
            <TranslatableText text="Ready to Study in Japan?" />
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            <TranslatableText text="Contact us today for a free consultation about your education and visa requirements" />
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button
              onClick={() => window.location.href = '/contact'}
              className="px-10 py-5 bg-[#FFD700] hover:bg-[#FFA500] text-[#8B0000] rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-[0_0_30px_rgba(255,215,0,0.5)]"
            >
              <TranslatableText text="Schedule Consultation" />
            </button>
            <button
              onClick={() => window.location.href = '/courses'}
              className="px-10 py-5 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-110 border-2 border-white/50"
            >
              <TranslatableText text="View Courses" />
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Education