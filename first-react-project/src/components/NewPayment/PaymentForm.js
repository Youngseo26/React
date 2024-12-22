import React, { useState } from "react";

import "./PaymentForm.css";

const PaymentForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [today, setToday] = useState(null);

  const inputTypeTextChangeHandler = (event) => {
    setName(event.target.value);
  };
  const inputTypeNumberChangeHandler = (event) => {
    setPrice(event.target.value);
  };
  const inputTypeDateChangeHandler = (event) => {
    setToday(event.target.value);
  };

  const buttonSubmitHandler = () => {
    console.log("name", name);
    console.log("price", price);
    console.log("today", today);
  };
  return (
    <form>
      <div className="new-payment__controls">
        <div className="new-payment__control">
          <label>이름</label>
          <input
            type="text"
            value={name}
            onChange={inputTypeTextChangeHandler}
          />
        </div>
        <div className="new-payment__control">
          <label>금액</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={price}
            onChange={inputTypeNumberChangeHandler}
          />
        </div>
        <div className="new-payment__control">
          <label>날짜</label>
          <input
            type="date"
            min="1990-01-01"
            max="2024-12-31"
            value={today}
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
