import { useState } from "react";
import "./TodoPages.css";

const TodoPage = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!task || !description) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        task,
        description,
      },
    ]);

    setTask("");
    setDescription("");
  };

  return (
    <div className="todo-page">
      <div className="todo-box">
        <h1>Create Todo</h1>

        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <textarea
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={addTodo}>Add Todo</button>

        <div className="todo-list">
          {todos.map((todo) => (
            <div className="todo-card" key={todo.id}>
              <h3>{todo.task}</h3>
              <p>{todo.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoPage;