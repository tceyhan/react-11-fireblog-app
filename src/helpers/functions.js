import { firebase } from "./firebase";
import { getDatabase,ref,set ,push, onValue, remove,update} from "firebase/database";
import { useEffect, useState } from "react";

export const addBlog=(info)=>{
    const db = getDatabase(firebase);
    const blogRef=ref(db,"tarik");
    const newBlogRef=push(blogRef);
    set((newBlogRef),{        
        user: info.user,    
        header: info.header,        
        imageUrl: info.imageUrl,
        content: info.content,
        date:info.date,
        displayName: info.displayName,
               
    })
  }
  


 export const useFetch = () => {
    const [blogList, setBlogList] = useState();
    useEffect(() => {
      const db = getDatabase(firebase);
      const blogRef = ref(db, "tarik");
      onValue(blogRef, (snapshot) => {
        const data = snapshot.val();
        const blogArray = [];
        for (let id in data) {
          blogArray.push({id, ...data[id]})
        }
        setBlogList(blogArray);
      });
    }, []);
    return { blogList };
  };

  export const deleteBlog = (id) => {
    const db = getDatabase(firebase);
    remove(ref(db, "tarik/"+id));
  };

  export const editBlog = (info) => {
    const db = getDatabase(firebase);
    const updates = {};
    updates["tarik/"+info.id] = info;
    return update(ref(db), updates);
  };

 