import { TodoEdit } from "./TodoEdit";
import "./TodoList.scss";
import { TodoTask } from "./TodoTask";

export const TodoList = ({
  todos,
  onRemoveTodo,
  onDoneTodo,
  onEditTodo,
  onEditToggle,
}) => {
  return (
    <div className="List">
      <ul className="List-ul">
        {todos.map((todo) =>
          todo.edited ? (
            <TodoEdit
              key={todo.id}
              todo={todo}
              onEditTodo={(todo) => onEditTodo(todo)}
            />
          ) : (
            <TodoTask
              key={todo.id}
              todo={todo}
              onRemoveTodo={(id) => onRemoveTodo(id)}
              onDoneTodo={(id) => onDoneTodo(id)}
              onEditToggle={(edited) => onEditToggle(edited)}
            />
          )
        )}
      </ul>
    </div>
  );
};
