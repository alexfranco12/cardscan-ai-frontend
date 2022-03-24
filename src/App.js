import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout, InnerLayout } from './styles'
import { 
  HomePage,
  SignUpPage,
  LoginPage,
  ProfilePage,
  NotFound
} from './pages';
import { UploadCard } from "./components";

const App = () => {
  return(
    <Router>
      <MainLayout>
        <InnerLayout>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/signup" element={<SignUpPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/profile" element={<ProfilePage />} />
            <Route exact path="/upload-card" element={<UploadCard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </InnerLayout>
      </MainLayout>
    </Router>
  )
};

export default App;