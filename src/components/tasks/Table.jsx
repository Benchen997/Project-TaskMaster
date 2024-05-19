import React from "react";
import Row from "./table-components/Row";

function Table( {taskList, deleteOnClick, checked, filterOption} ) {

    const mappings = {"Doing": false, "Done": true};
    const filteredTaskList = filterOption === ""
        ? taskList
        : taskList.filter((task) => task.completed === mappings[filterOption]);

    console.log(`From table: ${filterOption}`);
    return (
        <table className='table-fixed w-full border-collapse'>
                <thead className='sticky top-0 bg-my-table-header text-my-text'>
                    <tr>
                    <th className="w-1/12 p-2">Status</th>
                    <th className="w-7/12 p-2">Task</th>
                    <th className="w-3/12 p-2">Time</th>
                    <th className="w-1/12 p-2">Delete</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                    {filteredTaskList.map((task) => (
                        <Row key={task.uid} 
                        task={task} 
                        deleteOnClick={() => deleteOnClick(task.uid)}
                        checked={checked}  
                        />
                    ))}
                </tbody>
            </table>
    );
}

export default Table;