import React from 'react';
import CompleteCheck from './CompleteCheck'; 
import TaskContent from './TaskContent'; 
import TimeStamp from './TimeStamp'; 

function TaskContainer({ task }) {
  return (
    <div className="flex items-center py-2">
      {/* The checkbox */}
      <div className="mr-4">
        <CompleteCheck />
      </div>
      {/* The task content */}
      <div className="flex-1">
        <TaskContent content={task.content} />
      </div>
      {/* The timestamp */}
      <div className="ml-4 text-gray-500">
        <TimeStamp time={task.createTime} />
      </div>
    </div>
  );
}

export default TaskContainer;
