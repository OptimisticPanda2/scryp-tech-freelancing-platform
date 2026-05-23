import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import ClientDashboard from "./pages/ClientDashboard";
import ServicesPage from "./pages/ServicesPage";
import AddService from "./pages/AddService";
import DashboardServices from "./pages/DashboardServices";
import ProfilePage from "./pages/ProfilePage";
import RequestsPage from "./pages/RequestsPage";
import ClientExploreServices from "./pages/ClientExploreServices";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />

        <Route path="/freelancer-dashboard" element={<FreelancerDashboard />} />

        <Route path="/client-dashboard" element={<ClientDashboard />} />

        <Route path="/services" element={<ServicesPage />} />
        
       
        
        <Route path="/add-service" element={<AddService />} />
        <Route path="/dashboard/services" element={<DashboardServices />} />
        <Route path ="/profile" element={<ProfilePage />} />
        <Route path = "/requests" element={<RequestsPage />} />
        <Route path = "/client-services-explore" element={<ClientExploreServices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;