import React from 'react';
import Check from './row-components/Check';
import Content from './row-components/Content';
import TimeStamp from './row-components/TimeStamp';
import Delete from './row-components/Delete';

function Row({ task, deleteOnClick, checked }) {
  return (
    <tr className="bg-myBackground text-my-text">
      <td className="w-1/12 p-2">
        <Check checked={()=>checked(task.uid)} completed={task.completed}/>
      </td>
      <td className="w-7/12 p-2 break-words">
        <Content completed={task.completed}>{task.content}</Content>
      </td>
      <td className="w-3/12 p-2">
        <TimeStamp>{task.createTime}</TimeStamp>
      </td>
      <td className="w-1/12 p-2"><Delete deleteOnClick={deleteOnClick}/>
      </td>
    </tr>
  );
}

export default Row;
