import React from 'react';

function FilterOption({ option, selectedOption, onClick }) {
    return (
        <button
            className={`w-full h-20 p-10 flex items-center 
                justify-center cursor-pointer group 
                hover:bg-gray-700 hover:text-myHeader 
                ${selectedOption === option ? "bg-green-600 text-myText hover:bg-green-800" : ""}`}
            onClick={onClick}
        >
            {option}
        </button>
    );
}

export default FilterOption;

