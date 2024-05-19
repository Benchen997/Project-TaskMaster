import React from 'react';
import Table from '../tasks/Table';

function ListContainer({ taskList, deleteOnClick, checked, filterOption}) {
    return (
        <div className='overflow-auto mt-20 p-8 border-gray-500 border-t-2 w-5/6'>
            <Table taskList={taskList} deleteOnClick={deleteOnClick} 
            checked={checked} filterOption={filterOption}/>
        </div>
    );
}

export default ListContainer;
