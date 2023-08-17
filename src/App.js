// App.js (ou Routes.js)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Component/LoginPage';
import HomePage from './Component/HomePage';  // Assumons que vous avez une page d'accueil

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
  );
}

export default App;
