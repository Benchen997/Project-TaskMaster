import "./css/TaskContainer.css";
import React from "react";
import TaskContent from "./TaskContent";
import DeleteBtn from "./DeleteBtn";

function TaskContainer() {
  return (
    <span className="task-container">
      <TaskContent />
      <DeleteBtn />  
    </span>
  );
}


export default TaskContainer;