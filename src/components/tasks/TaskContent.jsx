import React from 'react';


function TaskContent({content}) {
    return (
        <p className='inline-block p-5 w-3/5 text-3xl font-roboto'> 
        {content}
        </p>
    )
}

export default TaskContent;