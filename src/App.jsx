import React, { useState, useRef } from "react";

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Learn Javascript",
            completed: false,
        },
        {
            id: 2,
            text: "Learn React",
            completed: false,
        },
        {
            id: 3,
            text: "Build a React App",
            completed: false,
        },
    ]);

    const [newTask, setNewTask] = useState("");
    const [filter, setFilter] = useState("all");
    const inputRef = useRef(null);

    const tasksCount = tasks.filter(task => !task.completed).length;

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([
               ...tasks,
                {
                    id: tasks.length + 1,
                    text: newTask,
                    completed: false,
                },
            ]);
            setNewTask("");
        }
        inputRef.current.focus();
    };

    const toggleTask = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === "all") return true;
        if (filter === "active") return !task.completed;
        if (filter === "completed") return task.completed;
        return true;
    });

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    }

    return (
        <div className="container">
            <div className="p-4">
                <h1>THINGS TO DO</h1>
                <input
                    ref={inputRef}
                    className="form-control mb-3"
                    placeholder="Add a new task..."
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') addTask();
                    }}
                />
                <div className="inpContainer">
                    {filteredTasks.map((task) => (
                        <div key={task.id} className="task-item">
                            <label className="checkbox">
                                <input 
                                    type="checkbox" 
                                    checked={task.completed} 
                                    onChange={() => toggleTask(task.id)} 
                                />
                                {task.text}
                            </label>
                            <i onClick={() => deleteTask(task.id)} className="bi bi-x-lg"></i>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bottom">
                <div className="left-side">
                    <div className="left">
                        <i className="bi bi-plus" onClick={addTask}></i>
                        <i className="bi bi-search"></i>
                    </div>
                    <span>{tasksCount} items left</span>
                </div>
                <div className="right-side">
                    <button className="btn" onClick={() => setFilter("all")}>All</button>
                    <button className="btn" onClick={() => setFilter("active")}>Active</button>
                    <button className="btn" onClick={() => setFilter("completed")}>Completed</button>
                </div>
            </div>
        </div>
    );
};

export default App;