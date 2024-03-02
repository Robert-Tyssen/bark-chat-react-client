import LoginPage from './containers/LoginPage';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <main>
          <LoginPage />
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
