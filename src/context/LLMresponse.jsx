import  { createContext } from 'react'
import axios from 'axios'
import { useState } from 'react';
import Cookies from 'js-cookie';

export const LLMcontext=createContext();
 
   const LLMresponse = ({ children }) => {
 const [resumedata, setResumedata] = useState()

     async  function axiosfecting() {
       try {
      const id=Cookies.get('Id')
       //j:"6920b7433f2933b72d3c01e5"
   
        
        
         const data = await axios.post(`/api/create`)
         const resumecode= data.data;
         setResumedata(resumecode)
        } catch(error){
          console.log('the real errorr',error);
        }
    }

  return (
    <LLMcontext.Provider  value={[resumedata, axiosfecting]}> {children} </LLMcontext.Provider>
 
  )
}

export default LLMresponse
