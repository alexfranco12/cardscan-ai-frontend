import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout, InnerLayout } from './styles'
import { 
  HomePage,
  SignUpPage,
  LoginPage,
  LogoutPage,
  NotFound
} from './pages';

function App() {
  return (
    <Router>
      <MainLayout>
        <InnerLayout>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/signup" element={<SignUpPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/logout" element={<LogoutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </InnerLayout>
      </MainLayout>
    </Router>
  );
}

export default App;