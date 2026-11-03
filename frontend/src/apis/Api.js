import axios from 'axios'

const BASE_URL = 'http://localhost:8000/api'

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// ---------- Contact ----------
export const submitContactForm = (formData) => {
  return api.post('/contact/contactAdd', formData)
}

export const getAllContacts = () => {
  return api.get('/contact/getAllContact')
}

export const getContactById = (id) => {
  return api.get(`/contact/getContactById/${id}`)
}

export const deleteContactById = (id) => {
  return api.delete(`/contact/deleteContactById/${id}`)
}

// ---------- Admin ----------
export const registerAdmin = (adminData) => {
  return api.post('/admin/register', adminData)
}

export const loginAdmin = (credentials) => {
  return api.post('/admin/login', credentials)
}

export const registerSuperAdmin = (adminData) => {
  return api.post('/admin/super-register', adminData)
}

export const changeAdminPassword = (id, passwordData) => {
  return api.post(`/admin/change-password/${id}`, passwordData)
}

export const updateAdminById = (id, adminData) => {
  return api.put(`/admin/updateById/${id}`, adminData)
}

export const getAllAdmins = () => {
  return api.get('/admin/getAll')
}

export const getAdminById = (id) => {
  return api.get(`/admin/getById/${id}`)
}

export const verifyAdminById = (id, statusData) => {
  return api.patch(`/admin/verifyById/${id}`, statusData)
}

export const activateAdminById = (id, statusData) => {
  return api.patch(`/admin/activateById/${id}`, statusData)
}

export const updateAdminSuspendStatusById = (id, statusData) => {
  return api.patch(`/admin/updateSuspendStatusById/${id}`, statusData)
}

export const deleteAdminById = (id) => {
  return api.delete(`/admin/deleteById/${id}`)
}

// ---------- Role ----------
export const createRole = (roleData) => {
  return api.post('/role/create', roleData)
}

export const updateRoleById = (id, roleData) => {
  return api.put(`/role/updateById/${id}`, roleData)
}

export const getAllRoles = () => {
  return api.get('/role/getAll')
}

export const getRoleById = (id) => {
  return api.get(`/role/getById/${id}`)
}

export const deleteRoleById = (id) => {
  return api.delete(`/role/deleteById/${id}`)
}

// ---------- Feedback ----------
export const createFeedback = (feedbackData) => {
  return api.post('/feedback/create', feedbackData)
}

export const getFeedbackById = (id) => {
  return api.get(`/feedback/getById/${id}`)
}

export const getAllFeedback = () => {
  return api.get('/feedback/getAll')
}

export const verifyFeedbackById = (id, statusData) => {
  return api.put(`/feedback/verifyById/${id}`, statusData)
}

export const deleteFeedbackById = (id) => {
  return api.delete(`/feedback/deleteById/${id}`)
}

// ---------- Story ----------
export const createStory = (storyData) => {
  return api.post('/story/create', storyData)
}

export const getStoryById = (id) => {
  return api.get(`/story/getById/${id}`)
}

export const getAllStories = () => {
  return api.get('/story/getAll')
}

export const verifyStoryById = (id, statusData) => {
  return api.put(`/story/verifyById/${id}`, statusData)
}

export const deleteStoryById = (id) => {
  return api.delete(`/story/deleteById/${id}`)
}

// ---------- Course ----------
export const createCourse = (courseData) => {
  return api.post('/course/create', courseData)
}

export const getCourseById = (id) => {
  return api.get(`/course/getById/${id}`)
}

export const getAllCourses = () => {
  return api.get('/course/getAll')
}

export const updateCourseById = (id, courseData) => {
  return api.put(`/course/updateById/${id}`, courseData)
}

export const deleteCourseById = (id) => {
  return api.delete(`/course/deleteById/${id}`)
}

// ---------- Schedule ----------
export const createSchedule = (scheduleData) => {
  return api.post('/schedule/create', scheduleData)
}

export const getScheduleById = (id) => {
  return api.get(`/schedule/getById/${id}`)
}

export const getAllSchedules = () => {
  return api.get('/schedule/getAll')
}

export const updateScheduleById = (id, scheduleData) => {
  return api.put(`/schedule/updateById/${id}`, scheduleData)
}

export const deleteScheduleById = (id) => {
  return api.delete(`/schedule/deleteById/${id}`)
}

// ---------- Teacher ----------
export const createTeacher = (teacherData) => {
  return api.post('/teacher/create', teacherData)
}

export const getTeacherById = (id) => {
  return api.get(`/teacher/getById/${id}`)
}

export const getAllTeachers = () => {
  return api.get('/teacher/getAll')
}

export const updateTeacherById = (id, teacherData) => {
  return api.put(`/teacher/updateById/${id}`, teacherData)
}

export const deleteTeacherById = (id) => {
  return api.delete(`/teacher/deleteById/${id}`)
}

export default api