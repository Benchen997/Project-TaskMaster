import React from "react";
import { ReactComponent as DeleteIcon } from "../../../../assets/delete.svg";

function Delete({ deleteOnClick }) {
  return (
    <button className="bg-transparent focus:outline-none p-1 w-12 h-12 group ease-in-out 0.3s
    " onClick={deleteOnClick}>
      <DeleteIcon className="w-full h-full text-myText group-hover:text-red-500" />
    </button>
  );
}

export default Delete;

