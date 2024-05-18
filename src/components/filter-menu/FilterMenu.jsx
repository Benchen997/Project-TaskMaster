import React from "react";
import FilterOption from "./FilterOption";

function FilterMenu( { selectedOption, handleOptionClick }) {

    return (
        <div className="bg-myBackground text-myText w-50 h-100
                        absolute right-0 mt-2 p-0 flex flex-col
                        border border-gray-300 rounded-md 
                        shadow-lg z-50">
            <FilterOption 
                option={"Doing"} 
                selectedOption={selectedOption}
                onClick={() => handleOptionClick("Doing")}
                />
            <FilterOption 
                option={"Done"}
                selectedOption={selectedOption}
                onClick={() => handleOptionClick("Done")}
                />
        </div>
    );
}

export default FilterMenu;