import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRouter = () => {
  let location = useLocation();
  const {currentUser} = useContext(AuthContext);
  if (!currentUser) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
    //  replace : true çünkü kendi içerisindeki sarmalla yönlendirme yapmak istiyorsak gönderir.
  }
  return <Outlet />; 
  // otherwise, render the children of this component (which will be the Routes component) 
  // and let them handle the rendering of their routes.
   
};

export default PrivateRouter;