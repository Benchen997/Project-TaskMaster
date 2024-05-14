import "./task-container.css";
import React from "react";
import TaskContent from "./TaskContent";
import Options from "./Options";
import CompleteBtn from "./CompleteBtn";


function TaskContainer() {

  return (
    <span className="task-container">
      <TaskContent />
      <CompleteBtn />
      <Options />  
    </span>
  );
}


export default TaskContainer;