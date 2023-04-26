import React, { useState } from "react";
import AddCategory from "./components/AddCategory";

function GifExpertApp() {
  const [categories, setCategories] = useState(["Naruto"]);

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map( category => <li key={category}> {category} </li>
        )}
      </ol>
    </div>
  );
}

export default GifExpertApp;

//como funcionaba antes rudimentrario
/* 
  const handleAdd = () => {
        //2 soluciones posibles
        setCategories(categ => [...categ, "Dragon Ball-Z"]);
        //setCategories([...categories, "Dragon Ball"]);
      }; */
