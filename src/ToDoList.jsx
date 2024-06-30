import React, {useState} from 'react'

function ToDoList() {
    const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower", "Walk the dog"]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (e) => {
        setNewTask(nt => nt = e.target.value);
    };

    const addTask = () => {
        if (checkTask(newTask)) {
            setTasks(t => [...tasks, newTask]);
            setNewTask(nt => nt = "");
        }
    };

    const removeTask = (i) => {
        setTasks(t => t.filter((_, index) => index !== i));
    };

    const moveTaskUp = (i) => {
        if (i > 0) {
            const updateTasks = [...tasks];
            [updateTasks[i], updateTasks[i - 1]] = [updateTasks[i - 1], updateTasks[i]]
            setTasks(updateTasks);
        }  
    };

    const moveTaskDown = (i) => {
        if (i < tasks.length - 1) {
            const updateTasks = [...tasks];
            [updateTasks[i], updateTasks[i + 1]] = [updateTasks[i + 1], updateTasks[i]]
            setTasks(updateTasks);
        }
    };

    const checkTask = (t) => {
        if (t.trim() === "")
            return false;
        return true;
    };

    return (
        <div className='to-do-list'>
            <h1>TO DO LIST</h1>

            <div>
                <input type="text" 
                        placeholder='Enter a task...'
                        value={newTask}
                        onChange={handleInputChange}/>
                <button onClick={addTask}
                        className='add-btn'>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delete-btn' onClick={() => removeTask(index)}>Delete</button>
                        <button className='move-btn' onClick={() => moveTaskUp(index)}>⬆️</button>
                        <button className='move-btn' onClick={() => moveTaskDown(index)}>⬇️</button>
                    </li>)
                }
            </ol>
        </div>
    );
}

export default ToDoList;