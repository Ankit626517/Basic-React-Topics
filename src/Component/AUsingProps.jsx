import React from "react";

function AUsingProps(props) {
  console.log(props);
  return (
    <>
      
      <h1>HEllo i am {props.name} - {props.last} == {props.children}</h1>
    </>
  );
}

export default AUsingProps;
