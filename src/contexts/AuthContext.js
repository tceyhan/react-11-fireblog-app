import { createContext, useEffect, useState } from "react";
import { userObserver } from "../helpers/firebase";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);

  //  useeffect kullanıyoruz ki currentuser ilk geldiği anda tutabilelim.

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );

};
export default AuthContextProvider;

//  bu context bütün application ı sarmalaması lazım ki user işlemlerini her yerde kullanabilelim.app.js yi sarmalar.
