import React from "react";
import TaskContainer from "../tasks/TaskContainer";

function Table( {taskList, deleteOnClick} ) {
    return (
        <table className='table-fixed w-full border-collapse'>
                <thead className='sticky top-0 bg-myTableHeader text-myText'>
                    <tr>
                    <th className="w-1/12 p-2">Status</th>
                    <th className="w-7/12 p-2">Task</th>
                    <th className="w-3/12 p-2">Time</th>
                    <th className="w-1/12 p-2">Delete</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                    {taskList.map((task) => (
                        <TaskContainer key={task.uid} task={task} deleteOnClick={() => deleteOnClick(task.uid)}/>
                    ))}
                </tbody>
            </table>
    );
}

export default Table;