import React from "react";
import HeaderButton from "./accessory-components/Header-components/HeaderButton";

function Header() {


    function btnOnClick() {
        console.log("Under development")
    }

    return (
        <div className="w-full h-full p-10">
            <span className="flex w-full justify-between items-center">
                <h1 className='self-start text-7xl font-fredoka'>
                    <strong className="text-my-header-text-1">Task </strong>
                    <strong className="text-my-header-text-2">Master</strong>
                </h1>
                <div className="flex gap-4">
                    <HeaderButton onClick={btnOnClick}>Explore</HeaderButton>
                    <HeaderButton onClick={btnOnClick}>Sign in</HeaderButton>
                    <HeaderButton onClick={btnOnClick}>About</HeaderButton>
                </div>
            </span>
        </div>
    );
}

export default Header;
