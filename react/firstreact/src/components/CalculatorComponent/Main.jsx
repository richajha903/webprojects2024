import React from "react";
import Calculator from "./Calculator";

const Main = () => {
  return (
    <div>
      {/* <!-- Main container --> */}
      <div className="main-container">
        {/* <!-- WSA ICON --> */}

        {/* <!-- sub container --> */}
        <div className="sub-container">
          {/* <!-- Header container --> */}
          <div className="header-container">
            {/* <!-- Calculator Heading --> */}
            <h1 className="header">Calculator</h1>
          </div>
        </div>
        <Calculator />
      </div>
    </div>
  );
};

export default Main;
