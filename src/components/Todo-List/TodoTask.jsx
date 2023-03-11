import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faEdit,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export const TodoTask = ({
  todo,
  onRemoveTodo,
  onDoneTodo,

  onEditToggle,
}) => {
  return (
    <li className="List-li">
      <span
        className={`List-span ${todo.done ? "List-span--line-through" : ""}`}
      >
        {todo.description}
      </span>
      <div className="List-container-btn">
        <button
          onClick={() => onDoneTodo(todo.id)}
          className={`List-btn ${todo.done ? "List-btn--done" : ""}`}
        >
          <FontAwesomeIcon icon={faCircleCheck} />
        </button>
        <button
          onClick={() => onEditToggle(todo.id)}
          className="List-btn List-btn--edit"
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button
          onClick={() => onRemoveTodo(todo.id)}
          className="List-btn List-btn--remove"
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </li>
  );
};
