import React, {useState} from 'react';
import './Task.css'
import EditTask from "./EditTask";
const Task = ({task, editField, deleteTask}) => {
    const [isDone, setDone ] = useState(false)
    function editDone() {
        setDone(!isDone)
    }
    return (
        <div className="container">

            <div className="container-task">
                <h1 style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
                    <EditTask task={task}
                              editField={editField}
                              field={'title'}  >
                    </EditTask>
                </h1>
                <p style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
                    <EditTask task={task}
                              editField={editField}
                              field={'description'}  >
                    </EditTask>
                </p>
            </div>

            <div className="container-button">
                <button onClick={editDone}>{!isDone ? '☐' : '☑'}</button>
            </div>
            <div className="container-button">
                <button onClick={() => deleteTask(task.id)}>Удалить</button>
            </div>
        </div>

    );
};

export default Task;