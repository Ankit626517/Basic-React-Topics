import React from "react";

function CMainEventHandlingPart() {
  function change() {
    var a = document.getElementById("demo");
    demo.innerHTML = "i am just coder";
    console.log("function is working", );
  }
  return (
    <>
      <h1 id="demo">HEllo i am coder </h1>
      <button onClick={change}>Click me </button>
    </>
  );
}

export default CMainEventHandlingPart;
