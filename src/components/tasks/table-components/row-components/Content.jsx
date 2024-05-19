import React from "react";

function Content({ completed, children }) {
    return (
        <p className='overflow-hidden text-ellipsis w-full text-3xl font-roboto p-5'>
            {
                completed ? (
                    <del className='text-green-500 line-through' style={{ textDecorationThickness: '3px' }}>
                        {children}
                    </del>
                ) : (
                    children
                ) 
            }
        </p>
    );
}

export default Content;
