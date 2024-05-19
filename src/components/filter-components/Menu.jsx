import React, {useState, useEffect} from "react";
import Option from "./Option";

/* 
    Menu component is a dropdown menu that shows two options: Doing and Done.
    @param taskCount: the number of tasks in the task list
    @param onOptionSelect: a callback function to get the selected option from the menu
*/
function Menu( { taskCount, onOptionSelect }) {
    const [selectedOption, setSelectedOption] = useState("");

    // clear the selected option if taskList is empty
    useEffect(() => {
        if (taskCount === 0) {
            setSelectedOption("");
        }

    }, [taskCount]);

     // when an option is clicked, set the selected option and call the onOptionSelect callback function
    function handleOptionClick(option) {
        selectedOption === option ? setSelectedOption("") : setSelectedOption(option);
        selectedOption === option ? onOptionSelect("") : onOptionSelect(option);
    }

    return (
        <div className="bg-my-background text-myText w-80 h-120 absolute right-0 mt-2 p-0 flex flex-col border border-gray-300 rounded-md shadow-lg z-50">
            <h1 className="w-full h-30 p-10 text-my-header-text-1 text-3xl text-center border-b-2 border-gray-500">
                Filter Setting</h1>                    
            <Option isSelected={selectedOption==="Doing"} onClick={() => handleOptionClick("Doing")}>
                    Doing
            </Option>

            <Option isSelected={selectedOption==='Done'} onClick={() => handleOptionClick("Done")}>
                    Done
            </Option>
        </div>
    );
}

export default Menu;