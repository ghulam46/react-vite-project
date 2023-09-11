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
        // "...toDoList" is spread operator to adding/joining array string
        setToDoList([...toDoList, newTask]);
    }

    const deleteTask = (taskName) => {
        const newToDoList = toDoList.filter((task) => {
            return (task === taskName) ? false : true;
        });
        setToDoList(newToDoList);
    }

    return(
        <div className="App">
            <div className="addTask">
                <input className="input input-bordered input-primary" type="text" onChange={handleInput}/>
                <button className="btn btn-primary ml-1" onClick={addTask}>Add Task</button>
            </div>
            <div className="list mt-10">
                {toDoList.map((task, key) => { // using map, because toDoList already in array
                    return(
                        <>
                            <h1 className='text-4xl' key={key}>
                                {task}
                                <button className="btn btn-square btn-outline ml-5" onClick={() => deleteTask(task)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </h1>
                        </>
                    ); 
                })}
            </div>
        </div>
    );
}