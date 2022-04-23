import React from "react";
import AuthContextProvider from "./contexts/AuthContext";
import AppRouter from "./app-router/AppRouter";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </div>
  );
};

export default App;