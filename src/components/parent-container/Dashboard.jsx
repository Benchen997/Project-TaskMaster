import React, { useState, useEffect} from "react";
import ListContainer from "./ListContainer";
import TaskEnterArea from "./TaskEnterArea";
import Add from "./Add";
import FilterButton from "../filter-components/FilterButton";
import InitialMessage from "./accessory-components/InitialMessage";

function Dashboard() {
    const [content, setContent] = useState('');
    const [taskList, setTaskList] = useState([]);
    /* 
        state to manage the filter option, can be 'Doing', 'Done' or ''
        this state will be passed to the table component to selectively 
        render tasks based on the filter option 
    */
    const [filterOption, setFilterOption] = useState('');

    // Retrieve taskList from localStorage on mount
    useEffect(() => {
        const savedTaskList = localStorage.getItem('taskList');
        // If there is a saved taskList, set the taskList state to the saved taskList
        if (savedTaskList) {
            setTaskList(JSON.parse(savedTaskList));
        }
    }, []);

    // Save taskList to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(taskList));
    }, [taskList]);

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
                return task.uid === uid ? { ...task, completed: !task.completed } : task;
            })
        );   
    }
    // callback function to get the filter option from the FilterButton component
    function handleOptionSelect(option) {
        setFilterOption(option);
    }

    return (
        <div className='flex-grow bg-my-background p-20
            justify-center items-center flex flex-col w-full h-full'>

            {/* 1. Filter button  */}
            <span className="flex justify-endflex w-full justify-between items-center">
                <div></div>
                <FilterButton taskCount={taskList.length} onOptionSelect={handleOptionSelect}/>
            </span>

            {/* 2. Table holds the list of tasks*/}
            {
                taskList.length > 0 ? (
                    <ListContainer taskList={taskList} deleteOnClick={deleteOnClick} checked={checked} filterOption={filterOption}/>
                ) : (                   
                    <InitialMessage>You haven't create any task yet.</InitialMessage>           
                )
            }
            
            {/* 3. Task input area */}
            <span className='text-xl font-roboto flex flex-col justify-center items-center w-5/6 h-3/12 mt-20'>
                <TaskEnterArea content={content} setContent={setContent} />
                <Add onClick={addOnClick} />
            </span>
        </div>
    );
}

export default Dashboard;
