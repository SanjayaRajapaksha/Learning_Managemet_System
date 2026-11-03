import React, { useState, useEffect } from 'react'
import { FaBook, FaClock, FaCalendar, FaCheckCircle, FaLaptop, FaChalkboardTeacher, FaGraduationCap, FaCertificate, FaStar } from 'react-icons/fa'
import { getAllCourses, getAllSchedules } from '../../apis/Api'
import { TranslatableText } from '../../utils/TranslatableText'

function Courses() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [schedules, setSchedules] = useState([])

  const cardColors = [
    'from-[#DC143C] to-[#8B0000]',
    'from-[#FFD700] to-[#FFA500]',
    'from-[#1a1a2e] to-[#16213e]',
    'from-[#8B0000] to-[#DC143C]',
  ]

  const dayIcons = {
    Monday: '月',
    Tuesday: '火',
    Wednesday: '水',
    Thursday: '木',
    Friday: '金',
    Saturday: '土',
    Sunday: '日',
  }

  const formatTime = (timeStr) => {
    if (!timeStr) return ''
    const [hourStr, minuteStr] = timeStr.split(':')
    let hour = parseInt(hourStr)
    const minute = minuteStr || '00'
    const ampm = hour >= 12 ? 'PM' : 'AM'
    hour = hour % 12 || 12
    return `${hour}:${minute} ${ampm}`
  }

  useEffect(() => {
    getAllCourses()
      .then((res) => {
        const data = res.data.result || res.data.courses || res.data || []
        setCourses(Array.isArray(data) ? data : [])
      })
      .catch((err) => console.error('Failed to load courses:', err))
      .finally(() => setLoading(false))

    getAllSchedules()
      .then((res) => {
        const data = res.data.result || res.data.schedules || res.data || []
        setSchedules(Array.isArray(data) ? data : [])
      })
      .catch((err) => console.error('Failed to load schedules:', err))
  }, [])

  const classModes = [
    {
      title: 'Online Classes',
      description: 'Learn from the comfort of your home with interactive online sessions via Zoom or Google Meet.',
      icon: FaLaptop,
      features: [
        'Live Interactive Sessions',
        'Recorded Lessons Available',
        'Digital Study Materials',
        'One-on-One Support',
        'Flexible Learning'
      ],
      color: 'from-[#1a1a2e] to-[#16213e]'
    },
    {
      title: 'Physical Classes',
      description: 'Experience immersive learning in our modern classrooms with face-to-face instruction.',
      icon: FaChalkboardTeacher,
      features: [
        'In-Person Instruction',
        'Hands-On Learning',
        'Study Resources Provided',
        'Direct Teacher Interaction',
        'Collaborative Environment'
      ],
      color: 'from-[#DC143C] to-[#8B0000]'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50" style={{ fontFamily: 'Silom, sans-serif' }}>

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-[#8B0000] via-[#DC143C] to-[#8B0000] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFD700] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold border border-white/30">
              <TranslatableText text="Our Courses" />
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fadeIn">
            <TranslatableText text="JLPT Preparation Courses" />
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90 mb-8">
            <TranslatableText text="Master Japanese Language with Expert-Led JLPT Training Programs" />
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
              <FaCertificate className="text-[#FFD700]" />
              <span><TranslatableText text="JLPT Certified" /></span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
              <FaStar className="text-[#FFD700]" />
              <span><TranslatableText text="Expert Instructors" /></span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
              <FaCheckCircle className="text-[#FFD700]" />
              <span><TranslatableText text="Proven Success Rate" /></span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-[#DC143C]/10 text-[#DC143C] rounded-full text-sm font-semibold mb-4">
              <TranslatableText text="AVAILABLE COURSES" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4">
              <TranslatableText text="Choose Your Level" />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <TranslatableText text="Start your journey or advance your skills with our comprehensive JLPT preparation courses" />
            </p>
          </div>

          {loading ? (
            <div className="text-center py-20">
              <div className="w-12 h-12 border-4 border-[#DC143C] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-500"><TranslatableText text="Loading courses..." /></p>
            </div>
          ) : courses.length === 0 ? (
            <p className="text-center text-gray-400 py-10">
              <TranslatableText text="No courses available at the moment." />
            </p>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {courses.map((course, index) => {
                const color = cardColors[index % cardColors.length]
                const contentList = course.content
                  ? course.content.split(',').map((item) => item.trim())
                  : []

                return (
                  <div
                    key={course.id}
                    className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border-2 border-gray-100 hover:border-[#DC143C]"
                  >
                    <div className={`bg-gradient-to-br ${color} p-8 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                              <FaBook className="text-2xl" />
                            </div>
                            <div>
                              <span className="text-sm opacity-90">
                                <TranslatableText text="Course" />
                              </span>
                              <h3 className="text-2xl font-bold">{course.first_title}</h3>
                            </div>
                          </div>
                          <FaCertificate className="text-5xl opacity-30" />
                        </div>
                        <h4 className="text-xl font-bold mb-2 opacity-90">{course.second_title}</h4>
                      </div>
                    </div>

                    <div className="p-8">
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">{course.description}</p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                          <div className="w-10 h-10 bg-[#DC143C]/10 rounded-lg flex items-center justify-center">
                            <FaClock className="text-[#DC143C]" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">
                              <TranslatableText text="Duration" />
                            </p>
                            <p className="font-semibold text-gray-800">
                              {course.duration} <TranslatableText text="Months" />
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                          <div className="w-10 h-10 bg-[#FFD700]/20 rounded-lg flex items-center justify-center">
                            <FaCalendar className="text-[#FFA500]" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">
                              <TranslatableText text="Schedule" />
                            </p>
                            <p className="font-semibold text-gray-800 text-sm">{course.schedule}</p>
                          </div>
                        </div>
                      </div>

                      {contentList.length > 0 && (
                        <div className="space-y-3 mb-6">
                          <h5 className="font-bold text-gray-800 mb-3">
                            <TranslatableText text="What You'll Learn:" />
                          </h5>
                          {contentList.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <FaCheckCircle className="text-[#DC143C] mt-1 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <button
                        onClick={() => window.location.href = '/contact'}
                        className={`w-full bg-gradient-to-r ${color} text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                      >
                        <TranslatableText text="Enroll Now" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Class Modes Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-[#DC143C]/10 text-[#DC143C] rounded-full text-sm font-semibold mb-4">
              <TranslatableText text="LEARNING OPTIONS" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4">
              <TranslatableText text="Choose Your Class Mode" />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <TranslatableText text="Flexible learning options to suit your lifestyle and preferences" />
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {classModes.map((mode, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border-2 border-gray-100 hover:border-[#DC143C]"
              >
                <div className={`bg-gradient-to-br ${mode.color} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 translate-x-1/2"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <mode.icon className="text-3xl" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2">
                      <TranslatableText text={mode.title} />
                    </h3>
                    <p className="text-lg opacity-90">
                      <TranslatableText text={mode.description} />
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <h5 className="font-bold text-gray-800 mb-4">
                    <TranslatableText text="Features:" />
                  </h5>
                  <div className="space-y-3">
                    {mode.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-[#DC143C]/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <FaCheckCircle className="text-[#DC143C] text-sm" />
                        </div>
                        <span className="text-gray-700">
                          <TranslatableText text={feature} />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Time Table Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, #FFD700 2px, transparent 2px), radial-gradient(circle at 80% 80%, #FFD700 2px, transparent 2px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-0.5 bg-[#FFD700]"></span>
              <FaCalendar className="text-4xl text-[#FFD700]" />
              <span className="w-12 h-0.5 bg-[#FFD700]"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <TranslatableText text="Class Schedule" />
            </h2>
            <p className="text-xl opacity-90">
              <TranslatableText text="Weekend classes designed for working professionals and students" />
            </p>
          </div>

          {schedules.length === 0 ? (
            <p className="text-center text-white/50 py-10">
              <TranslatableText text="No schedules available at the moment." />
            </p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {schedules.map((slot, index) => (
                <div
                  key={slot.id || index}
                  className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(255,215,0,0.3)]"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">
                        <TranslatableText text={slot.day} />
                      </h3>
                      <div className="flex items-center gap-2 text-[#FFD700]">
                        <FaClock />
                        <span className="text-sm">
                          {(() => {
                            const [sh, sm] = slot.start_time.split(':').map(Number)
                            const [eh, em] = slot.end_time.split(':').map(Number)
                            const diff = (eh * 60 + em) - (sh * 60 + sm)
                            const hrs = Math.floor(diff / 60)
                            const mins = diff % 60
                            if (mins > 0) {
                              return (
                                <>
                                  {hrs}<TranslatableText text="h" /> {mins}<TranslatableText text="m" /> <TranslatableText text="Session" />
                                </>
                              )
                            }
                            return (
                              <>
                                {hrs} <TranslatableText text="Hours Session" />
                              </>
                            )
                          })()}
                        </span>
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-[#FFD700]/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                      <span className="text-3xl font-bold text-[#FFD700]">
                        {dayIcons[slot.day] || '日'}
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center justify-center gap-3">
                      <FaClock className="text-2xl text-[#FFD700]" />
                      <span className="text-2xl font-bold">
                        {formatTime(slot.start_time)} - {formatTime(slot.end_time)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-12 bg-[#DC143C]/20 backdrop-blur-lg rounded-2xl p-8 border border-[#DC143C]/30 text-center">
            <p className="text-sm opacity-80">
              <TranslatableText text="Classes are conducted both online and at our physical location. Choose the mode that suits you best!" />
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#DC143C] to-[#8B0000] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FFD700] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FaGraduationCap className="text-6xl text-[#FFD700] mx-auto mb-6 animate-bounce" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <TranslatableText text="Ready to Begin?" />
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            <TranslatableText text="Enroll in our JLPT courses today and start your journey to Japanese fluency" />
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button
              onClick={() => window.location.href = '/contact'}
              className="px-10 py-5 bg-[#FFD700] hover:bg-[#FFA500] text-[#8B0000] rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-[0_0_30px_rgba(255,215,0,0.5)]"
            >
              <TranslatableText text="Enroll Now" />
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Courses