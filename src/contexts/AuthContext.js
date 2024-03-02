import { loginEmailPassword } from "../services/authService";

const { createContext, useState } = require("react");

// Context for authentication states / actions
export const AuthContext = createContext();

// Provider for authentication states / actions
export const AuthProvider = ({ children }) => {

  // Stores the details of the authenticated user
  const [user, setUser] = useState(null);

  // Login state
  const [loginState, setLoginState] = useState({ loading: false, error: null });

  // Attempt to login with the provided email and password
  const authLoginEmailPassword = async (email, password) => {
    // Set loading state
    setLoginState({ loading: true, error: null });
    // Call auth service and set new state based on result
    try {
      const userData = await loginEmailPassword(email, password);
      setUser(userData);
      setLoginState({ loading: false, error: null });
    } catch (e) {
      setLoginState({ loading: false, error: 'Login Failed' });
    }
  }

  // Logout the user
  const authLogout = () => {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loginState, authLoginEmailPassword, authLogout }}>
      {children}
    </AuthContext.Provider>
  );

}