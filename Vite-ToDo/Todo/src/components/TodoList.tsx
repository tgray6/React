import "../styles.css";
import { ITodo } from "../models";
import SingleTodo from "./SingleTodo";

interface ITodosProps {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoList = (props: ITodosProps) => {
  const { todos, setTodos } = props;
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};
export default TodoList;
