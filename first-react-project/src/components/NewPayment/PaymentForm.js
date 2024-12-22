import React, { useState } from "react";

import "./PaymentForm.css";

const PaymentForm = () => {
  //여러 개의 state 한번에 관리하기
  const [objectState, setObjectState] = useState({
    name: "",
    price: 0,
    today: null,
  });
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState(0);
  // const [today, setToday] = useState(null);

  const inputTypeTextChangeHandler = (event) => {
    setObjectState((prevState) => ({ ...prevState, name: event.target.value }));
  };
  const inputTypeNumberChangeHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      price: event.target.value,
    }));
  };
  const inputTypeDateChangeHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      today: event.target.value,
    }));
  };

  const buttonSubmitHandler = () => {
    console.log("name", objectState.name);
    console.log("price", objectState.price);
    console.log("today", objectState.today);
  };
  return (
    <form>
      <div className="new-payment__controls">
        <div className="new-payment__control">
          <label>이름</label>
          <input
            type="text"
            value={objectState.name}
            onChange={inputTypeTextChangeHandler}
          />
        </div>
        <div className="new-payment__control">
          <label>금액</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={objectState.price}
            onChange={inputTypeNumberChangeHandler}
          />
        </div>
        <div className="new-payment__control">
          <label>날짜</label>
          <input
            type="date"
            min="1990-01-01"
            max="2024-12-31"
            value={objectState.today}
            onChange={inputTypeDateChangeHandler}
          />
        </div>
      </div>
      <div className="new-payment__actions">
        <button type="button" onClick={buttonSubmitHandler}>
          결제 추가
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;
