import React from 'react';
import './css/TaskContent.css';

const placeholder= `What is your today's schedule?`;

function TaskContent() {
    return (
        <textarea className='task-content' placeholder= {placeholder}>
        </textarea>
    )
}

export default TaskContent;