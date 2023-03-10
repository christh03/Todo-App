import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { TodoList } from "./components/Todo-List/TodoList";
import "./TodoApp.scss";

const initialState = [
  {
    id: uuidv4(),
    description: "Buy a new CPU",
    done: false,
  },
  {
    id: uuidv4(),
    description: "Buy a new Cell",
    done: false,
  },
];

const todoReducer = (initialState, action) => {
  switch (action.type) {
    case "Adding":
      return [...initialState, action.payload];

    default:
      return initialState;
  }
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleAddTodo = (todo) => {
    dispatch({
      type: "Adding",
      payload: todo,
    });
  };

  return (
    <div className="Container">
      <section className="Container-section">
        <Header />
        <main className="Main">
          <Form onAddTodo={handleAddTodo} />
          <TodoList todos={todos} />
        </main>
      </section>
    </div>
  );
};
