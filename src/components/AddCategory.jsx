import React, { useState } from "react";
import PropTypes from "prop-types";

export function AddCategory({ setCategories }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* console.log("Submit ok prevenido"); */

    if (inputValue.trim().length > 2) {
      setCategories((categ) => [inputValue,...categ]);
      setInputValue("");
    }
    ///////////////////////////////////////////////  como funcionaba antes rudimentrario
/* 
  const handleAdd = () => {
        //2 soluciones posibles
        setCategories(categ => [...categ, "Dragon Ball-Z"]);
        //setCategories([...categories, "Dragon Ball"]);
      }; */
     //////////////////////////////////////////////////// 
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    </>
  );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
  }

export default AddCategory;
