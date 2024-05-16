import React from "react";

function TimeStamp({ time }) {
  return (
    <p className=" inline-block text-3xl text-gray-500">
      {time}
    </p>
  );
}

export default TimeStamp;