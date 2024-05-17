import React from 'react';


function TaskContent({content}) {
    return (
        <p className='overflow-hidden text-ellipsis
        w-full text-3xl font-roboto p-5'> 
        {content}
        </p>
    )
}

export default TaskContent;