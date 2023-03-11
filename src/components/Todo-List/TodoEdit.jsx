import { useState } from "react";

export const TodoEdit = ({ todo, onEditTodo }) => {
  const [description, setInputValue] = useState(todo.description);

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    onEditTodo({
      ...todo,
      description,
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="tell me"
        value={description}
        onChange={onInputChange}
      />
    </form>
  );
};
