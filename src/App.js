import React from "react";
import AppRouter from "./app-router/AppRouter";
import { ToastContainer } from "react-toastify";
import { BlogContextProvider } from "./contexts/BlogContext";
import AuthContextProvider from "./contexts/AuthContext";

const App = () => {
  return (
    <div>
      <AuthContextProvider>      
        <BlogContextProvider>
          <AppRouter />
          <ToastContainer />
        </BlogContextProvider>
      </AuthContextProvider>     
    </div>
  );
};

export default App;