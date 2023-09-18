// App.js (ou Routes.js)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from "./form/LoginForm/LoginForm";
import HomePage from './Pages/HomePage';
import DiscoverPage from "./Pages/DiscoverPage";  // Assumons que vous avez une page d'accueil
import DashboardPage from "./Pages/Dashboard/DashboardPage";
import {UserProvider} from "./Context/UserContext";
import RegisterPage from "./Pages/RegisterPage";
import MasterclassPage from "./Pages/MasterclassPage";
import AddMasterclassForm from "./Pages/AddMasterclassPage";
import LoginPage from './Pages/LoginPage';
import MasterclassCard from "./Pages/CoursPage";

function App() {
  return (
      <UserProvider>
          <Router>
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />}></Route>
              <Route path="/login" element={<LoginPage />} />
              <Route path={"/register"} element={<RegisterPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path={"/discover"} element={<DiscoverPage/>} />
              <Route path={"/add-masterclass"} element={<AddMasterclassForm/>}/>
              <Route path={"/masterclass"} element={<MasterclassPage/>}/>
              <Route path={"/cours"} element={<MasterclassCard/>}></Route>
            </Routes>
          </Router>
      </UserProvider>
  );
}

export default App;
