import React from "react";

function NameDisplay({children, onClick}) {
    return (
        <div className="flex items-center 
        justify-start ml-10 p-6 border-2 rounded-lg 
        border-transparent hover:border-blue-500 cursor-pointer" onClick={onClick}>
            <strong className="text-5xl font-fredoka text-blue-500">
                {children}
            </strong>
        </div>
    );
}

export default NameDisplay;