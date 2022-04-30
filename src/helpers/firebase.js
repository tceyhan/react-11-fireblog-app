import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,  
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";


import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "./toastNotify";

//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings

const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,
};


// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebase);


export const createUser = async (email, password, displayName, navigate) => {
  try {
    //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
    let userCredential = await createUserWithEmailAndPassword(auth,email,password);
    //? kullanıcı profilini güncellemek için kullanılan firebase metodu
    await updateProfile(auth.currentUser, {
      displayName: displayName      
           
    });
    navigate("/");
    toastSuccessNotify("Registered successfully!");
    console.log(userCredential);
  } catch (err) {
    toastErrorNotify(err.message);
    // alert(err.message);
  }
};

//* https://console.firebase.google.com/
//* => Authentication => sign-in-method => enable Email/password
//! Email/password ile girişi enable yap

export const signIn = async (email, password, navigate) => {
  try {
    //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,      
    );
    navigate("/");
    toastSuccessNotify("Logged in successfully!");
    console.log(userCredential);
  } catch (err) {
    toastErrorNotify(err.message);
    // alert(err.message);
  }
};

export const logOut = () => {
  signOut(auth);
  // alert ("Logged out successfully!");
  toastSuccessNotify("Logged out successfully!");
};

export const userObserver = (setCurrentUser) => {
  //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
    } else {
      // User is signed out
      setCurrentUser(false);
    }
  });
};


//* https://console.firebase.google.com/
//* => Authentication => sign-in-method => enable Google
//! Google ile girişi enable yap

export const signUpProvider = (navigate) => {
  //? Google ile giriş yapılması için kullanılan firebase metodu

  const provider = new GoogleAuthProvider();

  //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu

  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      //başarılı ise  navigate yapsın
      // navigate hook olduğu için sadece componentler içersinde kullanılır firebase içerisinde function olduğu  için kullanılamaz sadece props ile kullanılır. 
      navigate("/");
      // foto göstermeyi daha sonra dene
      const userPhoto = result.user.photoURL;
      console.log(userPhoto);
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
    });
};

export const forgotPassword = (email) => {
  //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      toastWarnNotify("Please check your mail box!");
      // alert("Please check your mail box!");
    })
    .catch((err) => {
      toastErrorNotify(err.message);
      // alert(err.message);
      // ..
    });
};

