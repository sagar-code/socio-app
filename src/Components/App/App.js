import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "../../Contexts/AuthContext";
import Navbar from "../Navbar/Navbar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";

const App = () => {
  return (
    <StrictMode>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </StrictMode>
  );
};

export default App;
