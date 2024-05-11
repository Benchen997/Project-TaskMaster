import React from 'react';
import './css/ListContainer.css';
import TaskContainer from './TaskContainer';
import Add from './Add';

function ListContainer() {
    return (
        <section className='list-container'>
            <h1>Your To-Do List</h1>
            <hr/>
            <TaskContainer/>
            {/* add task inline-block when button clicked */}
            <Add/>
        </section>
    )
}

function addOnClick() {
    console.log('Add button clicked');
}

export default ListContainer;