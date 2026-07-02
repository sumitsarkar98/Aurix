import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";
import ProtectedRoute from "./components/layout/ProtectedLayout.jsx";

import Landing from "./pages/Landing";
import Login from "./pages/Login.jsx";
import Register from "./pages/Signup.jsx";
import Home from "./pages/protected/Home.jsx";
import AdminDashboard from "./pages/protected/AdminDasboard.jsx";
import Error from "./pages/Error.jsx";
import LeadDetails from "./components/ui/LeadDetails.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* All pages use Header & Footer */}
        <Route element={<AppLayout />}>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/leads/:id" element={<LeadDetails />} />
          </Route>
        </Route>

        {/* 404 */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
