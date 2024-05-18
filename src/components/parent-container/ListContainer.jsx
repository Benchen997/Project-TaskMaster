import React from 'react';
import Table from './Table';

function ListContainer({ taskList, deleteOnClick, checked, filterOption}) {
    return (
        <div className='overflow-auto w-5/6 h-7/12'>
            <Table taskList={taskList} deleteOnClick={deleteOnClick} checked={checked} filterOption={filterOption}/>
        </div>
    );
}

export default ListContainer;
