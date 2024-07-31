import { useState } from "react";
export const AddCategory = ({ onAgregarCategoria }) => {
  const [inputValue, setinputValue] = useState();

  const onImputChage = ({ target }) => {
    setinputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onAgregarCategoria(inputValue.trim());
    // setCategories(cat =>[inputValue,...cat]);
    setinputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifts"
        value={inputValue}
        onChange={onImputChage}
      />
    </form>
  );
};

