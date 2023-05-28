import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import "./App.css"
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/users" element={<SignupPage />} />
          <Route path="/rooms" element={<HomePage/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
