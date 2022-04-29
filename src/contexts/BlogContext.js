
import { createContext, useState } from "react";



export const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
 
  const [blogList, setBlogList] = useState([{
    id: "",
    header: "",
    imageUrl: "",
    content: "",
    
    
  }]);

 
   

  return (
    <BlogContext.Provider value={{ blogList, setBlogList }}>
      {children}
    </BlogContext.Provider>
  );
};
