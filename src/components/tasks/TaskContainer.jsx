
import React from "react";
import TaskContent from "./TaskContent";
import CompleteBtn from "./CompleteBtn";

/* 
this component is a container for the 
task content, complete button and options 
and is used in the ListContainer component 
*/
function TaskContainer({ content }) {

  return (
    <span className="task-container">
      {/* the content is passed from parent container, 
        originated from task enter area */}
      <TaskContent content={content} />
      <CompleteBtn />
    </span>
  );
}


export default TaskContainer;