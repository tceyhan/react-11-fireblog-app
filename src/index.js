import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./contexts/AuthContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<AuthContextProvider>
    <App />
</AuthContextProvider>
);

