import React from 'react'
import { Routes, Route} from "react-router-dom";
import HomePage from "../pages/HomePages";
import Services from '../pages/ServicesPages';
import Courses from '../pages/AllCoursesPages';
import Portfolio from "../pages/AllPortfolioPages";
import ContactPage from "../pages/ContactPages";
import AboutPage from "../pages/AboutPage";
import Refund from "../pages/RefundPages";
import TermsAndCondition from "../pages/TermsAndConditionPage";
import PrivacyPolicy from "../pages/PrivacyPage";
import ProjectPage from "../pages/ProjectDetailsPage";
import CourseDetails from "../pages/CourseDetailsPage";




function AppRoute() {
  return (
    <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/service" element={<Services />}/>
            <Route exact path="/course" element={<Courses />}/>
            <Route exact path="/portfolio" element={<Portfolio />}/>
            <Route exact path="/contact" element={<ContactPage />}/>
            <Route exact path="/about" element={<AboutPage />}/>
            <Route exact path="/refund" element={<Refund />}/>
            <Route exact path="/Terms" element={<TermsAndCondition />}/>
            <Route exact path="/policy" element={<PrivacyPolicy />}/>
            <Route exact path="/project" element={<ProjectPage />}/>
            <Route exact path="/CourseDetails" element={<CourseDetails />}/>
     </Routes>
  )
}

export default AppRoute;





