import React, {useRef, useState} from 'react';
import './AddTask.css'
import task from "./Task";
import { v4 as uuid } from 'uuid'

const AddTask = ({addTask}) => {
    const [newTask, setNewTask] = useState({title : 'Пустая задача', description : 'Пустое описание', id : uuid()})
    return (
        <div className="container-add-task">
            <div className={"task-title"}>
                <h3>Добавить задачу</h3>
                <input onChange={event => setNewTask(
                    {...newTask, title: event.target.value}
                )}/>
            </div>
            <div className="task-desc">
                <h3>Описание задачи</h3>
                <textarea onChange={event => setNewTask(
                    {...newTask, description: event.target.value}
                )}></textarea>
            </div>
            <div className="task-button">
                <button onClick={() => {
                    addTask(
                        {...newTask, id : uuid()}
                    )
                }}>Добавить задачу</button>
            </div>
        </div>
    );
};

export default AddTask;