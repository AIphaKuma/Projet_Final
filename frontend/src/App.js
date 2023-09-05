// App.js (ou Routes.js)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import DiscoverPage from "./Pages/DiscoverPage";  // Assumons que vous avez une page d'accueil
import DashboardPage from "./Pages/DashboardPage";
import {UserProvider} from "./Context/UserContext";
import RegisterPage from "./Pages/RegisterPage";
import MasterclassPage from "./Pages/MasterclassPage";


function App() {
  return (
      <UserProvider>
          <Router>
            <Routes>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path={"/register"} element={<RegisterPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path={"/discover"} element={<DiscoverPage/>} />
                <Route path={"/masterclass"} element={<MasterclassPage/>}/>
            </Routes>
          </Router>
      </UserProvider>
  );
}

export default App;
