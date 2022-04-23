import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,  
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBU2PKNJ7yyf2W-PLlodv1Xc4m830fCK7k",
  authDomain: "fireblog-39b8d.firebaseapp.com",
  projectId: "fireblog-39b8d",
  storageBucket: "fireblog-39b8d.appspot.com",
  messagingSenderId: "1026300531733",
  appId: "1:1026300531733:web:ce51e8fa4e7e73338eea1c"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

//! Register işlemleri

export const createUser = async (email, password, displayName, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword( auth,email, password);
    await updateProfile(auth.currentUser, {displayName: displayName});
    navigate("/"); 
    // eğer create işlemi başarılı olursa navigate işlemi gerçekleşecek.
    console.log(userCredential);
  } catch (err) {
    alert(err.message); 
    // toastify 
  }
};

//! login işlemleri

//* https://console.firebase.google.com/
//* => Authentication => sign-in-method => enable Email/password
export const signIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    console.log(userCredential);
  } catch (err) {
    alert(err.message);
    // toastify
  }
};

export const logOut = () => {
  signOut(auth);
  alert("logged out successfully");
  // toastfy
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
      // ...
    } else {
      // User is signed out
      setCurrentUser(false);
    }
  });
};


//* https://console.firebase.google.com/
//* => Authentication => sign-in-method => enable Google

export const signUpProvider = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      console.log(result.user.photoURL)      
      navigate("/");
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
      // ...
    });
};