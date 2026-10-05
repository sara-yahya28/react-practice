import { useState } from "react";
// import reducer from "./reducer";
import "./ToDoList.css";
import { useTheme } from "./ThemeContext";
import useLocalStorage from "./useLocalStorage";

function ToDoList() {
  // useState (something that always change)
  const [inputValue, setInputValue] = useState("");//what user type
  // const [tasks, setTasks] = useState([]);//store typed input
  // const [tasks, dispatch] = useReducer(reducer, []);
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const { theme, toggleTheme } = useTheme();

  // Add new task
  function handleTasks(e) {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const newTask = { id: Date.now(), text: inputValue, completed: false }
   
    // dispatch({ type: 'ADD_TASK', task: { text: inputValue.trim() } });
   
    setTasks((prevTasks) => {
     return [...prevTasks, newTask]
    })
    setInputValue("");
  }

  // Change task state
  function toggleTask(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  // delete task
  function deleteTask(id) {
    // dispatch({ type: 'DELETE_TASK', id });
    setTasks((prevTasks)=>{
      prevTasks.filter((task)=> task.id!==id)
    })
  }

  return (
    <div className={`todo-container ${theme}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? 'dark' : 'light'}
      </button>
      <h1 className="todo-title">قائمة المهام</h1>

      <form className="todo-form" onSubmit={handleTasks}>
        <input
          className="todo-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="اكتب مهمة جديدة..."
        />
        <button className="todo-button" type="submit">
          إضافة
        </button>
      </form>

      {tasks.length === 0 ? (
        <p className="todo-empty">لا توجد مهام بعد. ابدأ بإضافة مهمة!</p>
      ) : (
        <ul className="todo-list">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`todo-item ${task.completed ? "completed" : ""}`}
            >
              <input
                className="todo-checkbox"
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span className="todo-text">{task.text}</span>
              <button
                className="todo-delete"
                onClick={() => deleteTask(task.id)}
                aria-label="حذف المهمة"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ToDoList;