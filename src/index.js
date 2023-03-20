import React from "react";
import ReactDOM from "react-dom/client"; //need to import client, according to V18 ReactDOM
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

// retrieves the Element with ID, root in index.html within the public folder..
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App 
root.render(
<React.StrictMode>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</React.StrictMode>

);