import React, { useState, useEffect } from 'react'
import { FaAward, FaBookOpen, FaChalkboardTeacher, FaCheckCircle, FaGraduationCap, FaQuoteLeft, FaSchool, FaStar, FaUserGraduate, FaPlus, FaTimes, FaUserTie } from 'react-icons/fa'
import { createFeedback, getAllFeedback, getAllTeachers, createStory, getAllStories } from '../../apis/Api'
import { TranslatableText } from '../../utils/TranslatableText'

function Testimonials() {

  const [teachers, setTeachers] = useState([])
  const [reviews, setReviews] = useState([])
  const [successStories, setSuccessStories] = useState([])

  const [showForm, setShowForm] = useState(false)
  const [formName, setFormName] = useState('')
  const [formReview, setFormReview] = useState('')
  const [formRating, setFormRating] = useState(5)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [showStoryForm, setShowStoryForm] = useState(false)
  const [storyName, setStoryName] = useState('')
  const [storyMessage, setStoryMessage] = useState('')
  const [storyError, setStoryError] = useState('')
  const [isStorySubmitting, setIsStorySubmitting] = useState(false)

  useEffect(() => {
    getAllTeachers()
      .then((res) => {
        const data = res.data.result || res.data.teachers || res.data || []
        setTeachers(Array.isArray(data) ? data : [])
      })
      .catch((err) => console.error('Failed to load teachers:', err))

    getAllFeedback()
      .then((res) => {
        const data = res.data.result || []
        const verified = data.filter((f) => f.verified === true)
        setReviews(verified)
      })
      .catch((err) => console.error('Failed to load feedback:', err))

    getAllStories()
      .then((res) => {
        const data = res.data.result || res.data || []
        const verified = (Array.isArray(data) ? data : []).filter((s) => s.verified === true)
        setSuccessStories(verified)
      })
      .catch((err) => console.error('Failed to load stories:', err))
  }, [])

  const handleAddReview = async (e) => {
    e.preventDefault()
    if (!formName.trim() || !formReview.trim()) {
      setError('Please fill in your name and feedback.')
      return
    }
    setIsSubmitting(true)
    setError('')
    try {
      await createFeedback({ name: formName.trim(), message: formReview.trim(), rate: formRating })
      setFormName('')
      setFormReview('')
      setFormRating(5)
      setShowForm(false)
      setError('✅ Thank you! Your feedback has been submitted for review.')
    } catch (err) {
      console.error(err)
      setError('Failed to submit feedback. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleAddStory = async (e) => {
    e.preventDefault()
    if (!storyName.trim() || !storyMessage.trim()) {
      setStoryError('Please fill in your name and story.')
      return
    }
    setIsStorySubmitting(true)
    setStoryError('')
    try {
      await createStory({ name: storyName.trim(), message: storyMessage.trim() })
      setStoryName('')
      setStoryMessage('')
      setShowStoryForm(false)
      setStoryError('✅ Thank you! Your story has been submitted for review.')
    } catch (err) {
      console.error(err)
      setStoryError('Failed to submit story. Please try again.')
    } finally {
      setIsStorySubmitting(false)
    }
  }

  const avatarColors = [
    'from-[#DC143C] to-[#8B0000]',
    'from-[#8B0000] to-[#DC143C]',
    'from-[#1a1a2e] to-[#16213e]',
    'from-[#FFD700] to-[#FFA500]',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50" style={{ fontFamily: 'Silom, sans-serif' }}>

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-[#8B0000] via-[#DC143C] to-[#8B0000] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFD700] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 40%, #FFD700 2px, transparent 2px), radial-gradient(circle at 80% 70%, white 2px, transparent 2px)',
          backgroundSize: '64px 64px'
        }}></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold border border-white/30 mb-6">
            <FaStar className="text-[#FFD700]" />
            <TranslatableText text="Teachers & Student Success" />
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fadeIn">
            <TranslatableText text="Our KNJI Community" />
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
            <TranslatableText text="Meet our dedicated teachers and hear from students who started their Japanese journey with KN Japanese Institute." />
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-[#DC143C]/10 text-[#DC143C] rounded-full text-sm font-semibold mb-4">
              <TranslatableText text="TEACHERS PAGE" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4">
              <TranslatableText text="Meet Our Teachers" />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <TranslatableText text="Qualified instructors with practical experience, exam knowledge, and a student-first teaching style." />
            </p>
          </div>
          {teachers.length === 0 ? (
            <p className="text-center text-gray-400 py-10">
              <TranslatableText text="No teachers available at the moment." />
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teachers.map((teacher, index) => (
                <div key={teacher.id || index} className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-200 hover:border-[#DC143C]">
                  <div className={`relative h-48 bg-gradient-to-br ${avatarColors[index % avatarColors.length]} flex items-center justify-center overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 40%, white 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
                    <div className="relative z-10 text-center">
                      <div className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/30 mx-auto mb-3">
                        <FaUserTie className="text-5xl text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{teacher.name}</h3>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
                        <FaChalkboardTeacher className="text-lg text-[#FFD700]" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8 bg-white">
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <FaGraduationCap className="text-[#DC143C] mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
                            <TranslatableText text="Qualification" />
                          </p>
                          <p className="text-gray-800 font-semibold">{teacher.qualification}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FaAward className="text-[#FFA500] mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
                            <TranslatableText text="Experience" />
                          </p>
                          <p className="text-gray-800 font-semibold">{teacher.experience}</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{teacher.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-[#DC143C]/10 text-[#DC143C] rounded-full text-sm font-semibold mb-4">
              <TranslatableText text="STUDENT REVIEWS" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4">
              <TranslatableText text="What Our Students Say" />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              <TranslatableText text="Real feedback from students who learned Japanese with KNJI and continued toward their goals." />
            </p>
            <button
              onClick={() => { setShowForm((prev) => !prev); setError('') }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#DC143C] hover:bg-[#8B0000] text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {showForm ? <FaTimes /> : <FaPlus />}
              {showForm
                ? <TranslatableText text="Cancel" />
                : <TranslatableText text="Share Your Feedback" />
              }
            </button>
            {!showForm && error && (
              <p className={`mt-4 text-sm font-semibold ${error.startsWith('✅') ? 'text-green-600' : 'text-red-600'}`}>{error}</p>
            )}
          </div>

          {showForm && (
            <div className="max-w-2xl mx-auto mb-16 bg-white p-8 rounded-3xl shadow-xl border-2 border-gray-100">
              <h3 className="text-2xl font-bold text-[#8B0000] mb-6 text-center">
                <TranslatableText text="Add Your Feedback" />
              </h3>
              <div className="mb-5">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <TranslatableText text="Your Name" />
                </label>
                <input
                  type="text"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. Nimal Perera"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#DC143C] focus:outline-none transition-colors"
                />
              </div>
              <div className="mb-5">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <TranslatableText text="Your Rating" />
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button type="button" key={star} onClick={() => setFormRating(star)} className="text-2xl transition-colors">
                      <FaStar className={star <= formRating ? 'text-[#FFA500]' : 'text-gray-300'} />
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-5">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <TranslatableText text="Your Feedback" />
                </label>
                <textarea
                  value={formReview}
                  onChange={(e) => setFormReview(e.target.value)}
                  placeholder="Share your experience with KN Japanese Institute..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#DC143C] focus:outline-none transition-colors resize-none"
                />
              </div>
              {error && (
                <p className={`text-sm mb-4 font-semibold ${error.startsWith('✅') ? 'text-green-600' : 'text-red-600'}`}>{error}</p>
              )}
              <button
                onClick={handleAddReview}
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-[#DC143C] hover:bg-[#8B0000] text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting
                  ? <TranslatableText text="Submitting..." />
                  : <TranslatableText text="Submit Feedback" />
                }
              </button>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.length === 0 ? (
              <p className="col-span-3 text-center text-gray-400 py-10">
                <TranslatableText text="No reviews yet. Be the first to share your experience!" />
              </p>
            ) : (
              reviews.map((student, index) => (
                <div key={`${student.id}-${index}`} className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-[#DC143C]">
                  <FaQuoteLeft className="absolute top-6 right-6 text-5xl text-[#DC143C]/10" />
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#DC143C] to-[#8B0000] flex items-center justify-center shadow-lg">
                      <FaUserGraduate className="text-3xl text-[#FFD700]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{student.name}</h3>
                      <div className="flex gap-1 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar key={star} className={star <= student.rate ? 'text-[#FFA500]' : 'text-gray-300'} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{student.message}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #FFD700 2px, transparent 2px), radial-gradient(circle at 80% 80%, #FFD700 2px, transparent 2px)',
          backgroundSize: '60px 60px'
        }}></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-0.5 bg-[#FFD700]"></span>
              <FaUserGraduate className="text-4xl text-[#FFD700]" />
              <span className="w-12 h-0.5 bg-[#FFD700]"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <TranslatableText text="Success Stories" />
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              <TranslatableText text="Students who moved forward to Japanese language schools through focused study and guidance." />
            </p>

            <button
              onClick={() => { setShowStoryForm((prev) => !prev); setStoryError('') }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFD700] hover:bg-[#FFA500] text-[#8B0000] rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {showStoryForm ? <FaTimes /> : <FaPlus />}
              {showStoryForm
                ? <TranslatableText text="Cancel" />
                : <TranslatableText text="Share Your Story" />
              }
            </button>

            {!showStoryForm && storyError && (
              <p className={`mt-4 text-sm font-semibold ${storyError.startsWith('✅') ? 'text-green-400' : 'text-red-400'}`}>
                {storyError}
              </p>
            )}
          </div>

          {/* Story Submit Form */}
          {showStoryForm && (
            <div className="max-w-2xl mx-auto mb-16 bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/20">
              <h3 className="text-2xl font-bold text-[#FFD700] mb-6 text-center">
                <TranslatableText text="Share Your Success Story" />
              </h3>
              <div className="mb-5">
                <label className="block text-sm font-semibold text-white/80 mb-2">
                  <TranslatableText text="Your Name" />
                </label>
                <input
                  type="text"
                  value={storyName}
                  onChange={(e) => setStoryName(e.target.value)}
                  placeholder="e.g. Nimal Perera"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border-2 border-white/20 focus:border-[#FFD700] focus:outline-none text-white placeholder-white/40 transition-colors"
                />
              </div>
              <div className="mb-5">
                <label className="block text-sm font-semibold text-white/80 mb-2">
                  <TranslatableText text="Your Story" />
                </label>
                <textarea
                  value={storyMessage}
                  onChange={(e) => setStoryMessage(e.target.value)}
                  placeholder="Tell us about your journey and success with KNJI..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border-2 border-white/20 focus:border-[#FFD700] focus:outline-none text-white placeholder-white/40 transition-colors resize-none"
                />
              </div>
              {storyError && (
                <p className={`text-sm mb-4 font-semibold ${storyError.startsWith('✅') ? 'text-green-400' : 'text-red-400'}`}>
                  {storyError}
                </p>
              )}
              <button
                onClick={handleAddStory}
                disabled={isStorySubmitting}
                className="w-full px-6 py-4 bg-[#FFD700] hover:bg-[#FFA500] text-[#8B0000] rounded-xl font-bold text-lg transition-all duration-300 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isStorySubmitting
                  ? <TranslatableText text="Submitting..." />
                  : <TranslatableText text="Submit Story" />
                }
              </button>
            </div>
          )}

          {/* Stories Grid */}
          {successStories.length === 0 ? (
            <p className="text-center text-white/50 py-10">
              <TranslatableText text="No success stories yet. Be the first to share yours!" />
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {successStories.map((story, index) => (
                <div
                  key={story.id || index}
                  className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-[#FFD700]/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-5">
                    <FaSchool className="text-2xl text-[#FFD700]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{story.name}</h3>
                  <p className="text-white/80 leading-relaxed mb-4">{story.message}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#DC143C]/30 border border-[#DC143C]/40 rounded-full">
                    <FaCheckCircle className="text-[#FFD700]" />
                    <span className="font-bold text-sm">
                      {new Date(story.createdAt).getFullYear()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#DC143C] to-[#8B0000] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FFD700] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FaBookOpen className="text-6xl text-[#FFD700] mx-auto mb-6 animate-bounce" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <TranslatableText text="Start Your Story With KNJI" />
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            <TranslatableText text="Learn Japanese with trusted teachers and step confidently toward your education goals in Japan." />
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button
              onClick={() => window.location.href = '/contact'}
              className="px-10 py-5 bg-[#FFD700] hover:bg-[#FFA500] text-[#8B0000] rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-[0_0_30px_rgba(255,215,0,0.5)]"
            >
              <TranslatableText text="Contact Us" />
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

export default Testimonials