  
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavPage from "./Pages/NavPage";
import HomePage from "./Pages/HomePage";
import ServicePage from "./Pages/ServicePage";
import FooterPage from "./Pages/FooterPage";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import "./App.css";
import { ToastContainer } from "react-toastify";   
import "react-toastify/dist/ReactToastify.css";    // import toastify CSS
import Dashboard from "./Pages/Dashboard";
import Page from "./Pages/Page";
const App = () => {
  const location = useLocation(); 
  // const navigate = useNavigate();
  return (
    <div>
 
<Routes>
        <Route
          path="/"
          element={
            <>
              <NavPage />
              <HomePage />
              <ServicePage />
              <FooterPage />
            </>
          }
        />
  <Route path="/page" element={<Page />} />
</Routes>


      {/* Conditional modals */}
      {location.pathname === "/signup" && <SignUpPage />}
      {location.pathname === "/login" && <LoginPage />}


      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default App;