import React from 'react';
import "./task-container.css";


function TaskContent({content}) {
    return (
        <p className='task-content'> 
        {content}
        </p>
    )
}

export default TaskContent;