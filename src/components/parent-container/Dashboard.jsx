import React, { useState } from "react";
import ListContainer from "./ListContainer";
import TaskEnterArea from "./TaskEnterArea";
import Add from "./Add";

function Dashboard() {
    const [content, setContent] = useState('');
    const [taskList, setTaskList] = useState([]);

    function addOnClick() {
        console.log('Add button clicked');
        if (content.trim() !== '') {
            const newTask = {
                uid: crypto.randomUUID(),
                content: content,
                completed: false,
                createTime: new Date().toLocaleString(),
            };
            setTaskList([...taskList, newTask]);
            setContent('');
        }
    }
    
    return (
        <div className='m-auto my-[10%] p-16 flex flex-col 
                items-center justify-center w-2/5
                h-3/5
                rounded-xlg shadow-2xl shadow-cyan-500/50 bg-white'>
            {/* Fixed title section */}
            <div className="w-4/5">
                <h1 className='mb-20 self-start text-myHeader text-7xl'>Task Master :</h1>
                <hr className="my-10 border-1 border-dashed border-gray-500 w-full" />
            </div>
            
            {/* Scrollable list container */}
            
            <ListContainer taskList={taskList} />
            
            
            <span className='text-xl font-roboto flex flex-col justify-center items-center w-4/5 mt-4'>
                <TaskEnterArea content={content} setContent={setContent} />
                <Add onClick={addOnClick} />
            </span>
        </div>
    );
}

export default Dashboard;
