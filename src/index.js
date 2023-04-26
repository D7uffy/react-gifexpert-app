import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import GifExpertApp from "./GifExpertApp";
import Almeneiro from "./components/Almeneiro";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GifExpertApp />
    <Almeneiro/>
    
  </>
);
