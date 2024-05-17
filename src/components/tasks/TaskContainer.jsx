import React from 'react';
import CompleteCheck from './CompleteCheck';
import TaskContent from './TaskContent';
import TimeStamp from './TimeStamp';
import Delete from './Delete';

function TaskContainer({ task, deleteOnClick }) {
  return (
    <tr className="bg-myBackground text-myText">
      <td className="w-1/12 p-2"><CompleteCheck /></td>
      <td className="w-7/12 p-2 break-words">
        <TaskContent content={task.content} />
      </td>
      <td className="w-3/12 p-2"><TimeStamp time={task.createTime} /></td>
      <td className="w-1/12 p-2"><Delete deleteOnClick={deleteOnClick}/></td>
    </tr>
  );
}

export default TaskContainer;
