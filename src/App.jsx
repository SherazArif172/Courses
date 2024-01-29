import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Parent from "./Components/Parent/Parent";
import LandingPage from "./LandingPage/LandingPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ecroll-courses" element={<Parent />} />
      </Routes>
    </Router>
  );
};

export default App;
