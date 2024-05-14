import React from 'react';
import './css/ListContainer.css';
import TaskContainer from './components.task/TaskContainer';
import Add from './Add';
import TaskEnterArea from './TaskEnterArea';

function ListContainer() {
    function addOnClick() {
        console.log('Add button clicked');
    }
    return (
        <section className='list-container'>
            <h1>To Do:</h1>
            <hr/>
            <ul>
                <li> <TaskContainer/> </li>
            </ul>

            {/* add task inline-block when button clicked */}

            <span>
                <TaskEnterArea/>
                <Add onClick={addOnClick}/> 
            </span>
        </section>
    )
}



export default ListContainer;