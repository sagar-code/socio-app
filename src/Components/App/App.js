import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Signup from "../Signup/Signup";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

export default App;
