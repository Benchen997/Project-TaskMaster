import React from 'react';
import Table from './Table';

function ListContainer({ taskList, deleteOnClick, checked }) {
    return (
        <div className='overflow-auto w-5/6 h-7/12'>
            <Table taskList={taskList} deleteOnClick={deleteOnClick} checked={checked}/>
        </div>
    );
}

export default ListContainer;
