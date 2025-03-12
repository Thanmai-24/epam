import { useState } from "react";
import "./TodoApp.css";

function TodoApp() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    if (taskText.trim() !== "") {
      setTasks([...tasks, { text: taskText, completed: false }]);
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTaskStatus = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>
      <TaskInput onAddTask={addTask} />
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            {task.text}
            <div>
              <button onClick={() => toggleTaskStatus(index)}>
                {task.completed ? "Undo" : "Done"}
              </button>
              <button onClick={() => removeTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TaskInput({ onAddTask }) {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    onAddTask(task);
    setTask("");
  };

  return (
    <div className="task-input">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
}

export default TodoApp;
