import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Form.scss";

export const Form = ({ onAddTodo }) => {
  const [description, setDescription] = useState("");

  const onInputChange = ({ target }) => {
    setDescription(target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: uuidv4(),
      description,
      done: false,
    };
    onAddTodo(newTodo);
    setDescription("");
  };

  return (
    <form onSubmit={onFormSubmit} className="Form">
      <input
        className="Form-input"
        type="text"
        placeholder="Add your new todo"
        value={description}
        onChange={onInputChange}
      />
      <button className="Form-btn" type="submit">
        Add
      </button>
    </form>
  );
};
