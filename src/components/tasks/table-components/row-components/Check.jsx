import React from "react";

function Check({checked, completed}) {
  return (
    <input type='checkbox'
          className=" inline-block border-double round-lg p-10 w-12 h-12 group mr-4"
          onChange={checked}
          checked={completed}
          >
    </input>
  );
}

export default Check;