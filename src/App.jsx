import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Signin from './pages/Signin.jsx';
import Signup from './pages/Signup.jsx';
import LLMresponse from './context/LLMresponse.jsx';
import AuthContext from './context/AuthContext.jsx';
import Details from './pages/Details.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import HistoryOfResumes from './pages/HistoryOfResumes.jsx';

const App = () => {

  return (<>

    <LLMresponse>
      <AuthContext>
      <Routes>
          {/* Route defines the path and the element (component) to render */}
       
          

          <Route path='/details' element={
            <ProtectedRoute>
              <Details />
            </ProtectedRoute>
          } />

        <Route path='/history' element={

          <ProtectedRoute>
            <HistoryOfResumes />
          </ProtectedRoute>
          } />

        </Routes>
        {/* public routes of web site  */}

        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> 


        </Routes>
      </AuthContext>
    </LLMresponse>
  </>
  )
}

export default App