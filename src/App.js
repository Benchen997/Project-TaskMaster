// This file is the main file of the project. It is the first file that is run when the project is started.
//import './App.css';
import ListContainer from './components/parent-container/ListContainer';
import TaskEnterArea from './components/parent-container/TaskEnterArea';
import Add from './components/parent-container/Add';
import { useState } from 'react';


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
    <section
      className='m-auto my-[20%] p-16 flex flex-col 
      items-center justify-center w-2/5 
      h-auto rounded-xlg shadow-lg bg-white overflow-hidden'>
      <h1 className='mb-5 self-start text-sky-400/100 text-7xl'>To Do :</h1>
      <hr className="my-10 border-1 border-dashed border-gray-500 w-4/5" />
      <ListContainer taskList={taskList} />
      <span className='
        text-xl font-roboto 
        flex-col justify-items-center
        flex items-center     
        justify-center w-4/5'>
        <TaskEnterArea content={content} setContent={setContent} />
        <Add onClick={addOnClick} />
      </span>
    </section>
  );
}

export default App;
