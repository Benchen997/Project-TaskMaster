import React from "react";

function NameInput({name, setName}) {

    return (
        <div className="inline-block bg-white ml-20">
            <input
                type="text"
                placeholder="Enter list name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-5 border-2 border-gray-300 rounded-lg 
                text-2xl text-gray-400
                focus:outline-none focus:border-blue-500 focus:shadow"
            />
        </div>
    );
}

export default NameInput;