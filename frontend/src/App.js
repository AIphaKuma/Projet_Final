// App.js (ou Routes.js)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Component/LoginPage';
import HomePage from './Component/HomePage';
import {UserProvider} from "./Context/UserContext";
import DashboardPage from "./Component/DashboardPage";

function App() {
  return (
      <UserProvider>
        <Router>
            <Routes>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
      </UserProvider>
  );
}

export default App;
