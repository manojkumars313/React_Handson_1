import React from "react";

const FunctionComponents = () => {
  return (
    <div className="functional_compo">
      <h1>This is created using Functional Component</h1>
      <p className="paragraph">This is done using external CSS</p>
      <p style={{ fontFamily: "sans-serif", color: "blue" }}>
        This is done using inline CSS
      </p>
    </div>
  );
};

export default FunctionComponents;