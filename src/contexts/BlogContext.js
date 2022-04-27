import { db } from "../helpers/firebase";
import { createContext, useContext, useEffect, useState } from "react";
import {
  ref,
  onValue,
  remove,
  update,
  
} from "firebase/database";
import { AuthContext } from "./AuthContext";

export const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [blogList, setBlogList] = useState();


 const useFetch = () => {
    useEffect(() => {
      // const db = getDatabase(app);
      const blogRef = ref(db, "tarik");
      onValue(blogRef, (snapshot) => {
        const data = snapshot.val();
        const blogArray = [];
        for (let id in data) {
          blogList.push({
            id,
            ...data[id],
          });
        }
        setBlogList(blogArray);
      });
    }, []);
    return { blogList };
  };

  const deleteBlog = (id) => {
    // const db = getDatabase(app);
    remove(ref(db, "tarik/"+id));
  };

  const editBlog = (info) => {
    // const db = getDatabase(app);
    const updates = {};
    updates["tarik/"+info.id] = info;
    return update(ref(db), updates);
  };

  const detailBlog = (id) => {
    const result = blogList?.filter((item) => item.id === id);
    return result;
  }

  const values = {
    currentUser,   
    deleteBlog,
    editBlog,
    detailBlog,
    blogList,
    useFetch,
  };
   

  return (
    <BlogContext.Provider value={{ values }}>
      {children}
    </BlogContext.Provider>
  );
};
