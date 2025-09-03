// import "./App.css";
// import NavBar from "./components/NavBar/NavBar.jsx";
// import Footer from "./components/Footer/Footer.jsx";
// import Home from "./Pages/Home/Home.jsx";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Public pages
// import UnderPrivilegedChildren from "./Pages/OurWork/UnderPrivilegedChildren/UnderPrivilegedChildren.jsx";
// import TribalAreaGrowth from "./Pages/OurWork/TribalZonesGrowth/TribalZonesGrowth.jsx";
// import EventPage from "./Pages/EventPage/EventPage.jsx";
// import ContactUs from "./Pages/ContactPage/ContactPage.jsx";
// import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage.jsx";
// import Blogpages from "./Pages/BlogPage/BlogPage.jsx";
// import DisabilityPeople from "./Pages/OurWork/DisabilityPeople/DisabilityPeople.jsx";
// import HealthCare from "./Pages/OurWork/HealthCare/HealthCare.jsx";
// import SocialWelfare from "./Pages/OurWork/SocialWelfare/SocialWelfare.jsx";
// import LegalSupportWomen from "./Pages/OurWork/LegalSupportWomen/LegalSupportWomen.jsx";
// import EmergencyRelief from "./Pages/OurWork/EmergencyRelief/EmergencyRelief.jsx";

// // Admin Pages
// import AdminLogin from "./Pages/admin/AdminLogin";
// import AdminLayout from "./components/admin/AdminLayout.jsx";
// import Welcome from "./Pages/admin/Welcome";
// import Applications from "./Pages/admin/Applications";
// import Blogs from "./Pages/admin/Blog";
// import Campaigns from "./Pages/admin/Campaigns";
// import Contacts from "./Pages/admin/Contacts";
// import Donations from "./Pages/admin/Donations";
// import Events from "./Pages/admin/Events";
// import Team from "./Pages/admin/TeamAdmin.jsx";
// // ProtectedRoute
// import ProtectedRoute from "./components/ProtectedRoute";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* ---------- Public Site ---------- */}
//         <Route
//           path="*"
//           element={
//             <>
//               <NavBar />
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route
//                   path="/underprivileged-children"
//                   element={<UnderPrivilegedChildren />}
//                 />
//                 <Route
//                   path="/tribalzonesgrowth"
//                   element={<TribalAreaGrowth />}
//                 />
//                 <Route
//                   path="/disability-people-service"
//                   element={<DisabilityPeople />}
//                 />
//                 <Route path="/health-care" element={<HealthCare />} />
//                 <Route path="/social-welfare" element={<SocialWelfare />} />
//                 <Route
//                   path="/legal-support-women"
//                   element={<LegalSupportWomen />}
//                 />
//                 <Route path="/emergency-relief" element={<EmergencyRelief />} />
//                 <Route path="/events" element={<EventPage />} />
//                 <Route path="/contactus" element={<ContactUs />} />
//                 <Route path="/aboutus" element={<AboutUsPage />} />
//                 <Route path="/blogs" element={<Blogpages />} />
//               </Routes>
//               <Footer />
//             </>
//           }
//         />

//         {/* ---------- Admin Login ---------- */}
//         <Route path="/admin" element={<AdminLogin />} />

//         {/* ---------- Protected Admin Routes ---------- */}
//         <Route element={<ProtectedRoute />}>
//           <Route path="/admin/dashboard" element={<AdminLayout />}>
//             <Route index element={<Welcome />} />
//             <Route path="applications" element={<Applications />} />
//             <Route path="blogs" element={<Blogs />} />
//             <Route path="campaigns" element={<Campaigns />} />
//             <Route path="contacts" element={<Contacts />} />
//             <Route path="donations" element={<Donations />} />
//             <Route path="events" element={<Events />} />
//             <Route path="team" element={<Team />} />
//           </Route>
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";

// Public pages
import Home from "./Pages/Home/Home.jsx";
import UnderPrivilegedChildren from "./Pages/OurWork/UnderPrivilegedChildren/UnderPrivilegedChildren.jsx";
import TribalAreaGrowth from "./Pages/OurWork/TribalZonesGrowth/TribalZonesGrowth.jsx";
import EventPage from "./Pages/EventPage/EventPage.jsx";
import ContactUs from "./Pages/ContactPage/ContactPage.jsx";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage.jsx";
import Blogpages from "./Pages/BlogPage/BlogPage.jsx";
import DisabilityPeople from "./Pages/OurWork/DisabilityPeople/DisabilityPeople.jsx";
import HealthCare from "./Pages/OurWork/HealthCare/HealthCare.jsx";
import SocialWelfare from "./Pages/OurWork/SocialWelfare/SocialWelfare.jsx";
import LegalSupportWomen from "./Pages/OurWork/LegalSupportWomen/LegalSupportWomen.jsx";
import EmergencyRelief from "./Pages/OurWork/EmergencyRelief/EmergencyRelief.jsx";

// Admin Pages
import AdminLogin from "./Pages/admin/AdminLogin";
import AdminLayout from "./components/admin/AdminLayout.jsx";
import Welcome from "./Pages/admin/Welcome";
import Applications from "./Pages/admin/Applications";
import Blogs from "./Pages/admin/Blog";
import Campaigns from "./Pages/admin/Campaigns";
import Contacts from "./Pages/admin/Contacts";
import Donations from "./Pages/admin/Donations";
import Events from "./Pages/admin/Events";
import Team from "./Pages/admin/TeamAdmin.jsx";

// ProtectedRoute
import ProtectedRoute from "./components/ProtectedRoute";

// ----- Layout for public site -----
const PublicLayout = () => (
  <>
    <NavBar />
    <Outlet />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* ---------- Public Site with Layout ---------- */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/underprivileged-children"
            element={<UnderPrivilegedChildren />}
          />
          <Route path="/tribalzonesgrowth" element={<TribalAreaGrowth />} />
          <Route
            path="/disability-people-service"
            element={<DisabilityPeople />}
          />
          <Route path="/health-care" element={<HealthCare />} />
          <Route path="/social-welfare" element={<SocialWelfare />} />
          <Route path="/legal-support-women" element={<LegalSupportWomen />} />
          <Route path="/emergency-relief" element={<EmergencyRelief />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/blogs" element={<Blogpages />} />
        </Route>

        {/* ---------- Admin Login ---------- */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* ---------- Protected Admin Routes ---------- */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin/dashboard" element={<AdminLayout />}>
            <Route index element={<Welcome />} />
            <Route path="applications" element={<Applications />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="campaigns" element={<Campaigns />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="donations" element={<Donations />} />
            <Route path="events" element={<Events />} />
            <Route path="team" element={<Team />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
