import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { ITodo } from "./models";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (todo !== "") {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Taskify Shit</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
