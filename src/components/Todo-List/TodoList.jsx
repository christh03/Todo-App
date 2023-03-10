import "./TodoList.scss";
import { TodoTask } from "./TodoTask";

export const TodoList = ({ todos }) => {
  return (
    <div className="List">
      <ul className="List-ul">
        {todos.map((todo) => (
          <TodoTask key={todo.id} todos={todo} />
        ))}
      </ul>
    </div>
  );
};
