import BlogForm from '../components/BlogForm'
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { addBlog } from '../helpers/firebase';
import { toastSuccessNotify } from "../helpers/toastNotify";
import { useNavigate } from 'react-router-dom';



const NewBlog = () => {
  let { currentUser} = useContext(AuthContext) 

  const navigate = useNavigate()
  
  const initialValues={
    author: currentUser.displayName,
    header: "",
    subtitle: "",
    content: "",
    imageUrl: "",
    published_date: Date.now(),
}

const [info, setInfo] = useState(initialValues);

    const handleNewBlog = (e) => {
      e.preventDefault();      
      addBlog(info);
      navigate("/");
      toastSuccessNotify("Blog added successfully!");
      setInfo(initialValues)
    }   

    return (
        <div>
            <BlogForm info={info} setInfo={setInfo} handleNewBlog={handleNewBlog}/>
        </div>
    )
}
export default NewBlog