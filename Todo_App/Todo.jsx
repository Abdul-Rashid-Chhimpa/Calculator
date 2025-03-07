import { useState } from "react";

import "./Todo.css";

function Todo() {
    const [item, setItem] = useState("");
    const [Todo, setTodo] = useState([]);

    // Add Task
    function eventHandle() {
        if (item.trim() === "") return;
        setTodo([...Todo, { text: item, status: "pending" }]);
        setItem("");
    }

    // Delete Task
    const deleteTodo = (index) => {
        const result = Todo.filter((_, id) => id !== index);
        setTodo(result);
    };

    // Edit Task
    const editTodo = (index) => {
        const newTask = prompt("Edit Task:", Todo[index].text);
        if (newTask !== null && newTask.trim() !== "") {
            const updatedTodos = Todo.map((todo, i) =>
                i === index ? { ...todo, text: newTask } : todo
            );
            setTodo(updatedTodos);
        }
    };

    // Toggle Status
    const toggleStatus = (index, status) => {
        const updatedTodos = Todo.map((todo, i) =>
            i === index ? { ...todo, status } : todo
        );
        setTodo(updatedTodos);
    };

    // Calculate counts
    const totalTasks = Todo.length;
    const completedTasks = Todo.filter(todo => todo.status === "complete").length;
    const pendingTasks = totalTasks - completedTasks;

    return (
        <>
            <div className="containor">
                <div className="todo">
                    <label>
                        <img src="../../src/Todo_App/img/notepad.png" alt="" />
                        <h1>Todo App</h1>
                    </label>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input 
                            type="text" 
                            value={item} 
                            onChange={(e) => setItem(e.target.value)} 
                            placeholder="Enter a task..." 
                        />
                        <button onClick={eventHandle}>
                            <img src="../../src/Todo_App/img/plus.png" alt=""/>
                        </button>
                    </form>
                    <div className="task-detail">
                        <label>Total Tasks: <span>{totalTasks}</span></label>
                        <hr />
                        <label className="complete">Complete: <span>{completedTasks}</span></label>
                        <hr />
                        <label className="pending">Pending: <span>{pendingTasks}</span></label>
                    </div>
                </div>
                <div className="item">
                    {Todo.map((ele, index) => (
                        <label key={index}>
                            <span>{ele.text}</span>
                            <div className="task">
                                <label className="complete">
                                    Complete
                                    <input 
                                        type="radio" 
                                        checked={ele.status === "complete"} 
                                        onChange={() => toggleStatus(index, "complete")} 
                                    />
                                </label>
                                <label className="pending">
                                    Pending
                                    <input 
                                        type="radio" 
                                        checked={ele.status === "pending"} 
                                        onChange={() => toggleStatus(index, "pending")} 
                                    />
                                </label>
                            </div>
                            <div className="btn">
                                <img src="../../src/Todo_App/img/pencil.png" onClick={() => editTodo(index)} alt="Edit" />
                                <img src="../../src/Todo_App/img/delete.png" onClick={() => deleteTodo(index)} alt="Delete" />
                            </div>
                        </label>
                    ))}
                </div>
                <footer>
                <span>Made By <p>@Abdul Rashid Chhimpa</p></span>
                </footer>
            </div>
           
        </>
    );
}

export default Todo;
