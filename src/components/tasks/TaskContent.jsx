import React from "react";

function TaskContent({ task }) {
    return (
        <p className='overflow-hidden text-ellipsis w-full text-3xl font-roboto p-5'> 
            {
                task.completed ? (
                    <del className='text-yellow-500 line-through' style={{ textDecorationThickness: '3px' }}>
                        {task.content}
                    </del>
                ) : (
                    task.content
                )
            }
        </p>
    );
}

export default TaskContent;
