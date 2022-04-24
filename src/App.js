import React from "react";
import AuthContextProvider from "./contexts/AuthContext";
import AppRouter from "./app-router/AppRouter";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer />
      </AuthContextProvider>
    </div>
  );
};

export default App;