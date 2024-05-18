import React from "react";

function CompleteCheck({checked}) {
  return (
    <input type='checkbox'
          className=" inline-block border-double round-lg p-10 w-12 h-12 group mr-4"
          onChange={checked}
          >
    </input>
  );
}

export default CompleteCheck;