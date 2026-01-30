import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Authcontextdata } from '../context/AuthContext';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const { isAuth, setIsAuth, loading, setLoading } = useContext(Authcontextdata);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const authuser = await axios.post('/auth/cookie');
        console.log(authuser.data.auth);
        const verified = authuser.data.auth;

        if (verified) {
          setIsAuth(true);
        }
      } catch (error) {
        console.error('Auth verification failed:', error);
      } finally {
        setLoading(false);
      }
    };

    if (loading) {
      verifyAuth();
    }
  }, [loading, setIsAuth, setLoading]);

  // Show loading state while verifying authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-[#FDFBF6] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#B8860B]"></div>
      </div>
    );
  }

  // Redirect to signin if not authenticated
  if (!isAuth) {
    console.log('Not authenticated, redirecting to signin');
    return <Navigate to="/signin" />;
  }

  return children;
};

export default ProtectedRoute;


