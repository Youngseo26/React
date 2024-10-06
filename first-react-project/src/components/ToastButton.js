import React from "react";
import "./Toast.css";

const ToastButton = ({ button }) => {
  return <button className="toast__button">{button.btnTitle}</button>;
};

export default ToastButton;
