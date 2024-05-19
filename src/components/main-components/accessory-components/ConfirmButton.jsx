import React from "react";

function ConfirmButton({ children, onClick }) {
    return (
        <button
            onClick={onClick}
            className="inline-block p-5 bg-sky-400 text-white border-2 border-gray-100 
            rounded-lg hover:bg-sky-500 hover:border-sky-500 hover:text-gray-100 hover:sacale-105 ease-in-out 0.3s"
        >
            {children}
        </button>
    );
}

export default ConfirmButton;