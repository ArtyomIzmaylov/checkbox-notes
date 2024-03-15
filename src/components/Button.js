import React, {useState} from 'react';
import './Button.css'
const Button = ({task}) => {
    const [isDone, setDone ] = useState(false)
    function editDone() {
        setDone(!isDone)
    }

    return (
        <div>
            <button onClick={editDone}>Выполнено</button>
        </div>
    );
};

export default Button;