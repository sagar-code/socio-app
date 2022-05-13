import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "../../Contexts/AuthContext";
import Navbar from "../Navbar/Navbar";
import Signup from "../Signup/Signup";

const App = () => {
  return (
    <StrictMode>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Navbar />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </StrictMode>
  );
};

export default App;
