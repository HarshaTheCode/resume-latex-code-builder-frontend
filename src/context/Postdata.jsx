import React, { createContext, useEffect } from 'react'
import { useState } from 'react';


export const PostDataContext=createContext();

const Postdata = ({children}) => {
    const [postData, setPostData] = useState({})
  

  
    

    
  return (<PostDataContext.Provider value={ [postData , setPostData] }>
 {children}
  </PostDataContext.Provider>
  )
}

export default Postdata
