import React, { useRef, useState, useEffect } from "react";
import { ReactComponent as FilterIcon } from "../../assets/filter.svg";
import FilterMenu from "../filter-menu/FilterMenu";

function FilterButton({ taskList, onOptionSelect}) {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const hideTimeout = useRef(null);

    // clear the selected option if taskList is empty
    useEffect(() => {
        if (taskList.length === 0) {
            setSelectedOption("");
        }

    }, [taskList]);

    // when an option is clicked, set the selected option and call the onOptionSelect callback
    const handleOptionClick = (option) => {
        // if the option is already selected, deselect it
        const newOption = selectedOption === option ? "" : option;
        setSelectedOption(newOption);
        onOptionSelect(newOption);
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleMouseEnter = () => {
        if (taskList.length > 0) {
            clearTimeout(hideTimeout.current);
            setShowMenu(true);
        }
    };

    const handleMouseLeave = () => {
        hideTimeout.current = setTimeout(() => {
            setShowMenu(false);
        }, 500); 
    };

    return (
        <div className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                className={`w-20 h-20 rounded-full flex items-center justify-center group ease-in-out transition-all 
                ${taskList.length === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                disabled={taskList.length === 0}
                onClick={toggleMenu}
            >
                <FilterIcon className={`
                    w-full h-full text-blue-400 
                    ${taskList.length === 0 ? "" : "group-hover:text-blue-600"}`}/>
            </button>
            {showMenu && (               
                <FilterMenu selectedOption={selectedOption} handleOptionClick={handleOptionClick}/>
            )}
        </div>
    );
}

export default FilterButton;
