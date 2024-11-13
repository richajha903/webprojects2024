import React from "react";

const ShowButton = ({ handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}> Ok</button>
    </div>
  );
};

export default ShowButton;
