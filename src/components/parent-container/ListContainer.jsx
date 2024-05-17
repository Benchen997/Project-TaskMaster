import React from 'react';
import Table from './Table';

function ListContainer({ taskList, deleteOnClick }) {
    return (
        <div className='overflow-auto w-5/6 h-7/12'>
            {taskList.length === 0 
                ? <h2 className='w-full h-full text-5xl text-center text-myHeader tex-roboto'>Oops, no tasks yet !</h2>
                : <Table taskList={taskList} deleteOnClick={deleteOnClick}/>
            }
        </div>
    );
}

export default ListContainer;
