import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

ReactDom.createRoot(document.getElementById("root")).render( 
    <React.StrictMode>
       <BrowserRouter>
       <App/>
       </BrowserRouter>
    
     </React.StrictMode>
);
        



