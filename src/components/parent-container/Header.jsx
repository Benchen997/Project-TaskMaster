import React from "react";
import FilterButton from "./FilterButton";

function Header({taskList, onOptionSelect}) {    

    return (
        <div className="w-5/6 h-2/12 flex flex-col ">
            <span className="flex w-full justify-between items-center">
                <h1 className='self-start text-myHeader text-7xl'>Task Master :</h1>
                <FilterButton taskList={taskList} onOptionSelect={onOptionSelect}/>
            </span>

            <hr className="my-10 border-1 border-dashed border-gray-500 w-full" />
        </div>
    );
}

export default Header;