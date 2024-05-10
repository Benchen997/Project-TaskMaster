import react from 'react';
import '../components-css/ListContainer.css';
import TaskContainer from './TaskContainer';
import Add from './Add';

function ListContainer() {
    return (
        <section className='list-container'>
            <h1>Your To-Do List</h1>
            <TaskContainer />
            <Add onClick="addOnClick()"/>
        </section>
    )
}

function addOnClick() {
    console.log('Add button clicked');
}

export default ListContainer;