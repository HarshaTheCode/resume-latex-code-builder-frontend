import Button from './Button'
import CTAButton from './CTAButton'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { Authcontextdata } from '../context/AuthContext'
import axios from 'axios'

const Navcomponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const { isAuth, setIsAuth, loading } = useContext(Authcontextdata);

  const handleSignOut = async () => {
    try {
      setIsLoggingOut(true);
      // Call logout endpoint
      await axios.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear auth state regardless of API response
      setIsAuth(false);
      setIsLoggingOut(false);
      // Redirect to home
      navigate('/');
    }
  };

  // Extend this list with all pages that use the light theme
  const isLightBackground = ['/', '/about', '/contact', '/details', '/history', '/signin', '/signup'].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColorClass = isLightBackground
    ? (scrolled ? 'text-black hover:text-black/70' : 'text-black/80 hover:text-black')
    : (scrolled ? 'text-white hover:text-white/70' : 'text-white/80 hover:text-white');

  const hoverBgClass = isLightBackground ? 'hover:bg-black/5' : 'hover:bg-white/10';

  const logoColorClass = isLightBackground ? 'text-black' : 'text-white';

  // Background logic:
  // If scrolled: use a blurred background matching the theme.
  // If not scrolled: transparent.
  const navBackgroundClass = scrolled
    ? (isLightBackground ? 'bg-[#FDFBF6]/10 backdrop-blur-lg shadow-sm border-b border-black/5' : 'bg-black/90 backdrop-blur-md shadow-sm border-b border-white/10')
    : 'bg-transparent';

  const navPaddingClass = scrolled ? 'py-3' : 'py-4'; // Slightly smaller when scrolled

  return (
    <nav className={`fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-10 transition-all duration-300 ${navBackgroundClass} ${navPaddingClass}`}>
      <div className="flex gap-5 py-2 items-center">

        <Button to='/' className={`${textColorClass} ${hoverBgClass} font-medium`}>MyApp</Button>
        <div className="hidden md:flex gap-2">
          <Button to='/about' className={`${textColorClass} ${hoverBgClass}`}>About</Button>
          <Button to='/contact' className={`${textColorClass} ${hoverBgClass}`}>Contact</Button>
          {isAuth && (
            <>
              <Button to="/details" className={`${textColorClass} ${hoverBgClass}`}>Create resume</Button>
              <Button to="/history" className={`${textColorClass} ${hoverBgClass}`}>History</Button>
            </>
          )}
        </div>

      </div>

      <div className="flex gap-3 items-center">

        <button className={`cursor-pointer transition-colors ${logoColorClass}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>
        {!loading && (isAuth ? (
          <button
            onClick={handleSignOut}
            disabled={isLoggingOut}
            className="group relative inline-flex items-center justify-center bg-[#0f172a] text-white font-medium rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-xl px-6 py-2 text-sm shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoggingOut ? 'Signing out...' : 'Sign Out'}
          </button>
        ) : (
          <CTAButton to='/signin' className="px-6 py-2 text-sm shadow-md">Sign In</CTAButton>
        ))}

      </div>

    </nav>
  )
}

export default Navcomponent
