import React from "react";

function InitialMessage({children}) {
    return (
        <h1 className='text-6xl font-roboto text-my-header-text-1'>{children}</h1>
    );
}

export default InitialMessage;