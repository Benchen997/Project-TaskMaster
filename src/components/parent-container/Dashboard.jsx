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
    function deleteOnClick(uid) {
        console.log('Delete button clicked');
        setTaskList(taskList.filter((task) => task.uid !== uid));
    }
    
    return (
        <div className='m-auto flex flex-col 
                items-center justify-center w-5/6
                h-5/6
                bg-myBackground
                max-w-screen-md
                max-h-screen-md
                rounded-xlg shadow-2xl shadow-cyan-500/50'>
            {/* Fixed title section */}
            <div className="w-5/6 h-2/12">
                <h1 className='mb-20 self-start text-myHeader text-7xl'>Task Master :</h1>
                <hr className="my-10 border-1 border-dashed border-gray-500 w-full" />
            </div>
            
            {/* Scrollable list container */}
            
            <ListContainer taskList={taskList} deleteOnClick={deleteOnClick}/>
            
            
            <span className='text-xl font-roboto flex flex-col justify-center items-center 
            w-5/6 h-3/12 mt-20'>
                <TaskEnterArea content={content} setContent={setContent} />
                <Add onClick={addOnClick} />
            </span>
        </div>
    );
}

export default Dashboard;
