import React, { memo } from "react";

const DummyText = (props) => {
  props.func();
  console.log("Child Component rendered!");
  return <p>dummy</p>;
};

export default memo(DummyText);
