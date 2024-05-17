import React from 'react';
import { ReactComponent as PlusCircleIcon } from '../../assets/plus-circle.svg'; // Adjust the path as necessary

function Add({ onClick }) {
  return (
    <button
      className="bg-transparent focus:outline-none
      p-0 mt-10 text-green-500 
      hover:text-green-700
      transform hover:scale-110
      active:scale-90 ease-in-out
      "
      onClick={onClick}>
      <PlusCircleIcon className="w-full h-full" />
    </button>
  );
}

export default Add;


