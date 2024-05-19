import React from 'react';

function Option({ children, isSelected, onClick }) {

    return (
        <button className={`w-full h-20 p-10 flex items-center text-my-header-text justify-center cursor-pointer group hover:bg-green-400 hover:text-white ${isSelected ? 'bg-green-500 text-white' : 'hover:bg-green-400 hover:text-white'}`} 
                onClick={onClick}>
            {children}
        </button>
    );
}

export default Option;

