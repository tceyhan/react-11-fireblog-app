import React from "react";
import AppRouter from "./app-router/AppRouter";
import { ToastContainer } from "react-toastify";
import { BlogContextProvider } from "./contexts/BlogContext";

const App = () => {
  return (
    <div>      
        <BlogContextProvider>
          <AppRouter />
          <ToastContainer />
        </BlogContextProvider>     
    </div>
  );
};

export default App;