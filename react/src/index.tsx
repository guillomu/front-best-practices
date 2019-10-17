import React from "react";
import ReactDOM from "react-dom";

//On importe le composant App
import App from "./app";

//On stock dans la variable MOUNT_NODE
const MOUNT_NODE = document.getElementById("app");

ReactDOM.render(<App />, MOUNT_NODE);
