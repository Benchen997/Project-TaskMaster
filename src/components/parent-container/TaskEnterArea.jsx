import React, { useEffect, useRef } from 'react';

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

    return (
        <textarea
        // Ref is used to access the textarea element， bind the textareaRef to the textarea element
        // The textareaRef.current property will point to the textarea element
        ref={textareaRef}
        className='w-4/5 h-auto rounded-md 
        p-8 m-2 border-2 border-gray-300 
        focus:outline-none text-4xl 
        focus:border-sky-400/100 resize-y 
        overflow-hidden
        transition duration-300 ease-in-out'
        placeholder={placeholder}
        value={content}
        onChange={(event) => setContent(event.target.value)}
        />
    );
}

export default TaskEnterArea;
