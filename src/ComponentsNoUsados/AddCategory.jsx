import React, { useState } from "react";
import PropTypes from "prop-types";

export function AddCategory({ setCategories }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit ok prevenido");

    if (inputValue.trim().length > 2) {
      setCategories((categ) => [...categ, inputValue]);
      setInputValue("");
    }
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
