import  { createContext } from 'react'
import axios from 'axios'
import { useState } from 'react';
import Cookies from 'js-cookie';

export const LLMcontext=createContext();
 
const LLMresponse = ({ children }) => {
  const [resumedata, setResumedata] = useState()

  async function axiosfecting(formData) {
    try {
      const id = Cookies.get('Id')
      
      // Prepare the payload to send to backend
      const payload = {
        ...formData  // Spread all form data fields
      }
      
      // Send formData in request body as second parameter to axios.post
      const data = await axios.post(`/api/create`, payload)
      const resumecode = data.data;
      setResumedata(resumecode)
    } catch(error){
      console.log('the real error', error);
      throw error; // Re-throw so Details.jsx can handle it
    }
  }

  return (
    <LLMcontext.Provider value={[resumedata, axiosfecting]}> 
      {children} 
    </LLMcontext.Provider>
  )
}

export default LLMresponse