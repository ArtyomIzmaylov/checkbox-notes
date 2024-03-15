import React, {useState} from 'react';

const EditTask = ({task, field, editField}) => {
    const [isEdit, setEdit] = useState(false)
    return (
        <div>
            {!isEdit
                ? <span
                    onClick={() => {
                        setEdit(!isEdit)
                        }}
                >{task[field]}</span>
                : <input onChange={event => editField(task.id, event, field)}
                         onBlur={() => setEdit(!isEdit)}/>
            }
        </div>
    );
};

export default EditTask;