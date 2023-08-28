// App.js (ou Routes.js)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import DiscoverPage from "./Pages/DiscoverPage";  // Assumons que vous avez une page d'accueil
import DashboardPage from "./Pages/DashboardPage";
import LoginForm from "./Pages/LoginForm";
import {UserProvider} from "./Context/UserContext";

function App() {
  return (
      <UserProvider>
          <Router>
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />}></Route>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/" element={<HomePage />} />
              <Route path={"/discover"} element={<DiscoverPage/>} />
            </Routes>
          </Router>
      </UserProvider>
  );
}

export default App;
