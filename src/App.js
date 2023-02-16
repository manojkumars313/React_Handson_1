import React, { useState } from "react";
import "./Components/Component.css";
import ClassComponents from "./Components/ClassComponents";
import FunctionComponents from "./Components/FunctionComponents";

function App() {
  // const [funcHidden, setFuncHidden] = useState(true);
  // const handleClickFunction = () => setFunc((Func) => !Func);

  // const [classCompo, setClass] = useState(true);
  // const handleClickClass = () => setFunc((ClassCompo) => !ClassCompo);
  const [funcHidden, setFuncHidden] = useState(true);
  const handleClickFunction = () => setFuncHidden((current) => !current);

  const [clsHidden, setClsHidden] = useState(true);
  const handleClickClass = () => setClsHidden((current) => !current);

  return (
    <div className="Container">
      <h1 className="heading">Styling using Functional and Class Component</h1>

      {/* Button */}
      <div className="btn_Box">
        <button className="btn btn_Func" onClick={handleClickFunction}>
          To see styling in Functional Component
        </button>

        <button class="btn btn_class" onClick={handleClickClass}>
          To see styling in Class Component
        </button>
      </div>

      <div className="component-box">
        {!funcHidden ? <FunctionComponents /> : null}
        {!clsHidden ? <ClassComponents /> : null}
      </div>
    </div>
  );
}

{
  /* <div className="container-box">
  {!funcCompo ? <FunctionalComponent /> : null}
  {!classCompo ? <ClassComponent /> : null}
</div>; */
}

export default App;
