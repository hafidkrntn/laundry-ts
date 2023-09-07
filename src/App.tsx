import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customer from "./pages/Customer";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/customer" element={<Customer />} />
      </Routes>
    </Router>
  );
};

export default App;
