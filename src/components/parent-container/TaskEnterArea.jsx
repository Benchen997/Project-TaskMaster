import React, { useEffect, useRef } from 'react';

/*
    TaskEnterArea component is a textarea element that allows users to enter the content of a task.
    The textarea element will automatically resize based on the content length.
    The content of the textarea is passed as a prop and updated by the parent component.
    @param {string} content - The content of the task entered by the user
    @param {function} setContent - The callback function to update the content of the task
*/
function TaskEnterArea({ content, setContent }) {
    const placeholder = 'What do you need to do today?';
    const textareaRef = useRef(null);

    // Auto resize the textarea whenever the content changes
    function autoResize() {
        if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }
    useEffect(autoResize, [content]);

    function handleContentChange(event) {
        setContent(event.target.value);
    }

    return (
        <textarea
        // Ref is used to access the textarea element， bind the textareaRef to the textarea element
        // The textareaRef.current property will point to the textarea element
        ref={textareaRef}
        className='w-full h-auto rounded-md 
        p-8 m-2 border-2 border-gray-300 
        bg-myBackground text-myText
        focus:outline-none text-4xl 
        focus:border-sky-400/100 resize-y 
        overflow-hidden
        transition duration-300 ease-in-out'
        placeholder={placeholder}
        value={content}
        onChange={handleContentChange}
        />
    );
}

export default TaskEnterArea;
