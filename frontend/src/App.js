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
import Masterclass from "./Components/Masterclass/Masterclass";

function App() {
  return (
      <UserProvider>
          <Router>
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />}></Route>
              <Route path="/login" element={<LoginForm />} />
              <Route path={"/register"} element={<RegisterPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path={"/discover"} element={<DiscoverPage/>} />
              <Route path={"/masterclass"} element={<MasterclassPage/>}/>
              <Route path={"/cours"} element={<Masterclass></Masterclass>}/>
            </Routes>
          </Router>
      </UserProvider>
  );
}

export default App;
