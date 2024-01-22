import { useId } from "react";
import css from "./SearchBox.module.css";
export const SearchBox = ({ handleChange, filter }) => {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>Finde contacts by name</label>
      <input
        id={id}
        className={css.inputFeald}
        value={filter}
        type="text"
        onChange={handleChange}
      />
    </>
  );
};
