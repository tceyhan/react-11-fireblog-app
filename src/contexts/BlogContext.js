
import { createContext, useState } from "react";



export const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
 
  const [blogList, setBlogList] = useState([{
    id: "",
    header: "",
    subtitle: "",
    imageUrl: "",
    content: "",
    date: "",
    
  }]);

 
   

  return (
    <BlogContext.Provider value={{ blogList, setBlogList }}>
      {children}
    </BlogContext.Provider>
  );
};
