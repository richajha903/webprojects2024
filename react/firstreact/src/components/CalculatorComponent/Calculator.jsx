import React, { useState } from "react";
import Display from "./Display";
import ButtonRow from "./ButtonRow";

const Calculator = () => {
  // State Variables: => input,Result
  const [input, setInput] = useState("0");
  const [result, setResult] = useState("");

  //Button Click handler
  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("0");
      setResult("");
    } else if (value === "BCK") {
      setInput((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
    } else if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch {
        setResult("Error");
      }
    } else {
      setInput((prev) => (prev === "0" ? value : prev + value));
    }
  };

  return (
    <>
      {/* <!-- Calculator Container --> */}
      <div className="calculator-container">
        {/* <!-- Background Circle --> */}
        <div className="background-circle"></div>
        {/* <!-- Calculator --> */}
        <div className="calculator">
          {/* <!-- Output screen --> */}
          <Display input={input} result={result} />
          {/* Button Rows */}
          <ButtonRow handleButtonClick={handleButtonClick} />
        </div>
      </div>
    </>
  );
};

export default Calculator;
