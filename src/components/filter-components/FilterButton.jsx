import React, {useState} from "react";
import { ReactComponent as FilterIcon } from "../../assets/filter.svg";
import Menu from "./Menu";

/*
    FilterButton component is a button that when clicked, it will show a menu with two options: Doing and Done.
    @param taskCount: the number of tasks in the task list
    @param onOptionSelect: a callback function to get the selected option from the menu
*/
function FilterButton({ taskCount, onOptionSelect}) {
    // state to manage the visibility of the menu
    const [showMenu, setShowMenu] = useState(false);
    // state to manage the which option is selected: can only be doing or done or none

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="relative"
        >
            <button
                className={`w-20 h-20 rounded-full flex items-center justify-center group ease-in-out transition-all 
                ${taskCount === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                disabled={taskCount === 0}
                onClick={toggleMenu}
            >
                <FilterIcon className={`
                    w-full h-full text-blue-400 
                    ${taskCount === 0 ? "" : "group-hover:text-blue-600"}`}/>
            </button>
            {showMenu && (               
                <Menu taskCount={taskCount} onOptionSelect={onOptionSelect}/>
            )}
        </div>
    );
}

export default FilterButton;
