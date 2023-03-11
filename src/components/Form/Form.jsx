import { useForm } from "../../Hooks/useForm";
import "./Form.scss";

export const Form = ({ onAddTodo }) => {
  const { description, onFormSubmit, onInputChange } = useForm(onAddTodo);

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
