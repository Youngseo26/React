import React from "react";
import "./Toast.css";

const ToastMessage = ({ message, children }) => {
  return (
    <main className="toast__message">
      <header className="toast__message-title">{message.title}</header>
      <p className="toast__message-text">{message.text}</p>
      {children}
    </main>
  );
};

export default ToastMessage;
