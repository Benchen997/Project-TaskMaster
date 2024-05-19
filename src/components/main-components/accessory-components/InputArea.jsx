import React from "react";
import NameInput from "./NameInput";
import ConfirmButton from "./ConfirmButton";

function InputArea({name, setName, confirmOnClick}) {
    return (
        <div className='flex items-center justify-start'>
                <NameInput name={name} setName={setName}/>
                <ConfirmButton onClick={confirmOnClick}>Confirm</ConfirmButton>
            </div>
    );
}

export default InputArea;