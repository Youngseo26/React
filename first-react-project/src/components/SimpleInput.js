import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState(" ");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
    setEnteredNameIsTouched(true);

    //enteredName이 빈 값인 경우 제출이 안되게 분기처리
    if (enteredName.trim() === "") {
      console.log("submit fail!");
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    setEnteredName("");
  };

  const inputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    console.log(event.target.value);
    setEnteredNameIsTouched(true);
    if (event.target.value.trim() === "") {
      setEnteredNameIsTouched(false);
    } else setEnteredNameIsValid(true);
  };

  const nameInputBlurHandler = (event) => {
    console.log("event onBlur!");
    setEnteredNameIsTouched(true);
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
  };
  //에러 메세지 보여주는 경우, true -> 메세지 노출
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  const nameInputClass = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">당신의 이름은?</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          value={enteredName}
          onChange={inputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">빈 값이 아니어야 합니다.</p>
        )}
      </div>
      <div className="form-actions">
        <button>제출하기</button>
      </div>
    </form>
  );
};

export default SimpleInput;
