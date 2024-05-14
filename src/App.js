// This file is the main file of the project. It is the first file that is run when the project is started.
import './App.css';
import ListContainer from './components/ListContainer';
import TaskEnterArea from './components/TaskEnterArea';
import Add from './components/Add';
import { useState } from 'react';
import TaskContainer from './components/components.task/TaskContainer';

function App() {
  const [content, setContent] = useState('');
  const [taskList, setTaskList] = useState([]);

  function addOnClick() {
    console.log('Add button clicked');
    if (content.trim() !== '') {
      const newTask = {
        uid: crypto.randomUUID(),
        content: content,
        completed: false,
        createTime: new Date().toLocaleString(),
      };
      setTaskList([...taskList, newTask]);
      setContent('');
    }
  }

  return (
    <section className='main'>
      <h1>To Do:</h1>
      <hr/>
      <ListContainer taskList={taskList}/>
      <span>
          <TaskEnterArea content={content} setContent={setContent}/>
          <Add onClick={addOnClick}/> 
      </span>
    </section>
  );
}

export default App;
