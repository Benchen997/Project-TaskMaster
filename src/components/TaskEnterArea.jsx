import React from "react";
import './css/TaskEnterArea.css';

function TaskEnterArea({ content, setContent }) {
    const placeholder = 'What do you need to do today?';

    return (
        <textarea className='task-enter-area'
            placeholder={placeholder}
            value={content}
            onChange={(event) => setContent(event.target.value)}
        />
    )
}

export default TaskEnterArea;