// App.js (ou Routes.js)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import DiscoverPage from "./Pages/DiscoverPage";  // Assumons que vous avez une page d'accueil

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
            <Route path={"/discover"} element={<DiscoverPage/>} />
        </Routes>
      </Router>
  );
}

export default App;
