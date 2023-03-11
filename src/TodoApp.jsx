import { useReducer } from "react";
import { Form, Header, TodoList } from "./components";
import "./TodoApp.scss";

const initialState = [];

const todoReducer = (initialState, action) => {
  switch (action.type) {
    case "Adding":
      return [...initialState, action.payload];

    case "Remove":
      return initialState.filter((todos) => todos.id !== action.payload);

    case "Done":
      return initialState.map((todos) => {
        if (todos.id === action.payload) {
          return {
            ...todos,
            done: !todos.done,
          };
        }
        return todos;
      });

    case "Edit":
      return initialState.map((todos) => {
        if (todos.id === action.payload.id) {
          return {
            ...todos,
            description: action.payload.description,
            edited: !action.payload.edited,
          };
        }
        return todos;
      });

    case "EditToggle":
      return initialState.map((todos) => {
        if (todos.id === action.payload) {
          return {
            ...todos,
            edited: !todos.edited,
          };
        }
        return todos;
      });

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

  const handleRemoveTodo = (id) => {
    dispatch({
      type: "Remove",
      payload: id,
    });
  };

  const handleDoneTodo = (id) => {
    dispatch({
      type: "Done",
      payload: id,
    });
  };

  const handleEditTodo = (todo) => {
    dispatch({
      type: "Edit",
      payload: todo,
    });
  };

  const handleEditToggle = (id) => {
    console.log(id);
    dispatch({
      type: "EditToggle",
      payload: id,
    });
  };

  return (
    <div className="Container">
      <section className="Container-section">
        <Header />
        <main className="Main">
          <Form onAddTodo={handleAddTodo} />
          <TodoList
            todos={todos}
            onRemoveTodo={handleRemoveTodo}
            onDoneTodo={handleDoneTodo}
            onEditTodo={handleEditTodo}
            onEditToggle={handleEditToggle}
          />
        </main>
      </section>
    </div>
  );
};
