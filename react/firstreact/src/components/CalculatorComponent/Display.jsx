import React from "react";

const Display = ({ input, result }) => {
  return (
    <>
      <div className="output-field-container">
        <input
          type="text"
          className="output-field"
          id="display"
          value={result}
          readonly
        />
        <input
          type="text"
          className="input-field"
          placeholder="0"
          id="input-screen"
          value={input}
          readonly
        />
      </div>
    </>
  );
};

export default Display;
