import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../components/layout/Layout"
import Home from "../pages/home/Home"
import About from "../pages/about/About"
import Contact from "../pages/contact/Contact"
import Courses from "../pages/courses/Courses"
import Education from "../pages/educationandvisa/Education"
import Testimonials from "../pages/testimonials/Testimonials"

function KNRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/education-and-visa" element={<Education />} />
          <Route path="/educationandvisa" element={<Education />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default KNRoutes