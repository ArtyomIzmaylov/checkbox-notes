import React, {useRef, useState} from 'react';
import './Check-list.css'
import Task from "./Task";
import AddTask from "./AddTask";
import { v4 as uuid } from 'uuid'


const initNotes = [
    {id : uuid(), title : 'Сделать навести уборку', description : 'В блоке завялась грязь. Нужно убраться немедленно'},
    {id : uuid(), title : 'Сделать навести уборку', description : 'В блоке завялась грязь. Нужно убраться немедленно'},
    {id : uuid(), title : 'Сделать навести уборку', description : 'В блоке завялась грязь. Нужно убраться немедленно'},
    {id : uuid(), title : 'Сделать навести уборку', description : 'В блоке завялась грязь. Нужно убраться немедленно'},
]
const CheckList = () => {
    const [notes, setNotes] = useState(initNotes)
    function deleteTask(id) {
        setNotes(notes.filter(elem => {
            if (elem.id !== id) {
                return elem
            }
        }))
    }
    function addTask(task) {
        task.id = uuid()
        setNotes([task, ...notes])
    }
    function editField(id, event, field) {
        setNotes(notes.map(elem => {
            if (elem.id === id) {
                elem[field] = event.target.value
            }
            return elem
        }))
    }
    const result = notes.map(task => {
        return <Task key={task.id} task={task} editField={editField} deleteTask={deleteTask}></Task>
    })
    return (
        <div>
            <AddTask addTask={addTask} ></AddTask>
            {result}
        </div>
    );
};

export default CheckList;