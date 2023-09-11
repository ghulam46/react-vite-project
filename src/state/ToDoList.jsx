/* eslint-disable react/jsx-key */
import { useState } from 'react';
import '../App.css'

export default function ToDoList() {
    const [newTask, setNewTask] = useState("");
    const [toDoList, setToDoList] = useState([]);

    const handleInput = (e) => {
        setNewTask(e.target.value);
    }

    const addTask = () => {
        const newToDoList = [...toDoList, newTask]; // "...toDoList" is spread operator to adding/joining array string
        setToDoList(newToDoList);
    }

    return(
        <div className="App">
            <div className="addTask">
                <input className="input input-bordered input-primary" type="text" onChange={handleInput}/>
                <button className="btn btn-primary" onClick={addTask}>Add Task</button>
            </div>
            <div className="list mt-10">
                {toDoList.map((task, key) => { // using map, because toDoList already in array
                    return <h1 className='text-2xl' key={key}>{task}</h1>;
                })}
            </div>
        </div>
    );
}