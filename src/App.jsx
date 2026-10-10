import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import PatientDashboard from "./Pages/PatientDashboard";
import AdminLogin from "./Pages/AdminLogin";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminCentres from "./Pages/AdminCentres";
import AdminPatients from "./Pages/AdminPatients";
import AdminRequests from "./Pages/AdminRequests";
import AdminAppointments from "./Pages/AdminAppointments";
import PatientProfile from "./Pages/PatientProfile";
import PatientSettings from "./Pages/PatientSettings";

// New pages
import About from "./Pages/About";
import Centres from "./Pages/Centres";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/centres" element={<Centres />} />
        <Route path="/contact" element={<Contact />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Patient Pages */}
        <Route
          path="/patient-dashboard"
          element={<PatientDashboard />}
        />
        <Route
          path="/patient-profile"
          element={<PatientProfile />}
        />
        <Route
          path="/patient-settings"
          element={<PatientSettings />}
        />

        {/* Admin Pages */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />
        <Route
          path="/admin-centres"
          element={<AdminCentres />}
        />
        <Route
          path="/admin-patients"
          element={<AdminPatients />}
        />
        <Route
          path="/admin-requests"
          element={<AdminRequests />}
        />
        <Route
          path="/admin-appointments"
          element={<AdminAppointments />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
