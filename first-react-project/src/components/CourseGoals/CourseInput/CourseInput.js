import React, { useState } from "react";

import Button from "../../UI/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    console.log(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
      setEnteredValue("");
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    //겂이 ''인 경우, 배경 빨간색으로
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>목표</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          style={{
            backgroundColor: isValid ? "transparent" : "salmon",
            borderColor: isValid ? "#ccc" : "red",
          }}
        />
      </div>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;
