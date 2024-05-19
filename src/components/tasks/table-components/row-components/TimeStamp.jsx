import React from "react";

function TimeStamp({ children }) {
  return (
    <p className=" inline-block text-xl text-gray-500">
      {children}
    </p>
  );
}

export default TimeStamp;