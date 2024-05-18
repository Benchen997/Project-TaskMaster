import React, { useState} from "react";
import ListContainer from "./ListContainer";
import TaskEnterArea from "./TaskEnterArea";
import Add from "./Add";
import Header from "./Header";

function Dashboard() {
    const [content, setContent] = useState('');
    const [taskList, setTaskList] = useState([]);
    // Function to add a new task to the task list with few properties
    function addOnClick() {
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

    // Function to delete a task from the task list by filtering out the task with the given uid
    function deleteOnClick(uid) {
        setTaskList(taskList.filter((task) => task.uid !== uid));
    }

    // Function to toggle the completed status of a task by 
    // setting the completed status to the opposite of the current status
    function checked(uid) {
        setTaskList(
            taskList.map((task) => {
                if (task.uid === uid) {
                    return { ...task, completed: !task.completed };
                }
                return task;
            })
        );   
    }
    
    //--------------------------------------------------------------------------------//
    return (
        <div className='m-auto flex flex-col 
                items-center justify-center w-5/6 h-5/6
                bg-myBackground
                max-w-screen-md
                max-h-screen-md
                rounded-xlg shadow-2xl shadow-cyan-500/50'>

            {/* Fixed title section */}
            <Header taskList={taskList}/>
            
            {/* Scrollable list container */}
            {
                taskList.length > 0 ? (
                    <ListContainer taskList={taskList} deleteOnClick={deleteOnClick} checked={checked}/>
                ) : (                   
                    <h1 className='text-4xl font-roboto text-myHeader'>You haven't create any task yet.</h1>           
                )
            }
            
            {/* Task input area */}
            <span className='text-xl font-roboto flex flex-col justify-center items-center 
            w-5/6 h-3/12 mt-20'>
                <TaskEnterArea content={content} setContent={setContent} />
                <Add onClick={addOnClick} />
            </span>
        </div>
    );
}

export default Dashboard;
