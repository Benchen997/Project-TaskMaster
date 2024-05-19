import React, { useState, useEffect } from "react";
import InputArea from "./accessory-components/InputArea";
import NameDisplay from "./accessory-components/NameDisplay";

function Title({ children }) {
    // Initialize the state with values from localStorage if available
    const [name, setName] = useState(() => {
        const savedData = localStorage.getItem("titleData");
        return savedData ? JSON.parse(savedData).name : "";
    });

    const [isEditing, setIsEditing] = useState(() => {
        const savedData = localStorage.getItem("titleData");
        return savedData ? JSON.parse(savedData).isEditing : true;
    });


    // Save name and isEditing states to localStorage whenever they change
    useEffect(() => {
        const data = JSON.stringify({ name, isEditing });
        localStorage.setItem("titleData", data);
    }, [name, isEditing]);

    function confirmOnClick() {
        console.log(name);
        name.trim() === "" ? alert("Invalid name") : setIsEditing(false);
    }

    function handleNameDisplayClick() {
        setIsEditing(true);
    }

    return (
        <div className='flex items-center justify-start p-20 bg-white'>
            { isEditing && <h1 className='text-5xl font-roboto text-my-header-1'>{children}</h1> }
            { 
                isEditing 
                ? <InputArea name={name} setName={setName} confirmOnClick={confirmOnClick} />
                : <NameDisplay onClick={handleNameDisplayClick}>{name}</NameDisplay> 
            }   
        </div>
    );
}

export default Title;
