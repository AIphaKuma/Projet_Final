// App.js (ou Routes.js)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import DiscoverPage from "./Pages/DiscoverPage";  // Assumons que vous avez une page d'accueil
import DashboardPage from "./Pages/Dashboard/DashboardPage";
import {UserProvider} from "./Context/UserContext";
import RegisterPage from "./Pages/RegisterPage";
import MasterclassPage from "./Pages/MasterclassPage";
import AddMasterclassForm from "./Pages/AddMasterclassPage";
import LoginPage from './Pages/LoginPage';
import MasterclassCard from "./Pages/CoursPage";
import LessonPage from "./Pages/CoursPage";
import UploadLesson from'./Pages/UploadPage';

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
              <Route path="/lessons/:lessonId" element={<LessonPage />} /> {/* Nouvelle route pour la page de leçon */}
              <Route path={"/upload-lesson"} element={<UploadLesson/>}/>
            </Routes>
          </Router>
      </UserProvider>
  );
}

export default App;
