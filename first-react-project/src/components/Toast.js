import React from "react";
import "./Toast.css";
import ToastMessage from "./ToastMessage";
import ToastButton from "./ToastButton";

const Toast = ({ message }) => {
  return (
    <div className={`toast toast-${message.title}`}>
      <ToastMessage message={message} />
      <ToastButton />
    </div>
  );
};

export default Toast;
