import React from "react";
import "./Toast.css";

const ToastButton = ({ button }) => {
  const handleClickHandler = (title) => {
    console.log(title);
  };
  return (
    <button
      className="toast__button"
      onClick={handleClickHandler(message.title)}
    >
      {button.btnTitle}
    </button>
  );
};

export default ToastButton;
