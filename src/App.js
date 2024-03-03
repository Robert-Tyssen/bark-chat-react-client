import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './containers/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>

          <Routes>

            {/* Login screen */}
            <Route path='/login' element={<LoginPage />} />

            {/* Authenticated routes */}
            <Route element={<ProtectedRoute />}>
              <Route path='/' element={<HomePage />} />
            </Route>

          </Routes>

        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
