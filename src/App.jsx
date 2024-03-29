import { useState, useEffect } from "react";
import './App.css'; 
import Header from "./componentes/Header.jsx";
import Tasklist from './componentes/TaskList.jsx'
import AddTaskForm from "./AddForm.jsx";


const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const editTask = (taskId, editedTitle, editedDescription) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, name: editedTitle, description: editedDescription };
      }
      return task;
    }));
  };

  const addTask = (title, description) => {
    const newTask = {
      id: tasks.length + 1,
      name: title,
      description: description,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="app">
      <Header />
      <Tasklist tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} editTask={editTask} />
      <AddTaskForm addTask={addTask} />
    </div>
  );
};
export default App;
