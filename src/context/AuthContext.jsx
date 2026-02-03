
import { useState, createContext, useEffect } from 'react'
import axios from '../api/axiosConfig.js'

export const Authcontextdata = createContext();

const AuthContext = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  // Initialize auth state from localStorage on mount
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Check if there's a stored auth state
        const storedAuth = localStorage.getItem('isAuth');
        
        // Verify with backend via cookie
        const response = await axios.post('/auth/cookie');
        const verified = response.data.auth;

        if (verified) {
          setIsAuth(true);
          localStorage.setItem('isAuth', 'true');
        } else {
          setIsAuth(false);
          localStorage.removeItem('isAuth');
        }
      } catch (error) {
        console.error('Auth initialization failed:', error);
        setIsAuth(false);
        localStorage.removeItem('isAuth');
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // Custom setIsAuth that also updates localStorage
  const updateIsAuth = (value) => {
    setIsAuth(value);
    if (value) {
      localStorage.setItem('isAuth', 'true');
    } else {
      localStorage.removeItem('isAuth');
    }
  };

  return (
    <Authcontextdata.Provider value={{ isAuth, setIsAuth: updateIsAuth, loading, setLoading }}>
      {children}
    </Authcontextdata.Provider>
  )
}
export default AuthContext