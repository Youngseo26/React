import "./App.css";
import Toast from "./components/Toast";
import ToastMessage from "./components/ToastMessage";
import ToastButton from "./components/ToastButton";

function App({ message }, { button }) {
  const messageArray = [
    {
      title: "success",
      text: "Right on! Your account has been updated",
    },
    {
      title: "warning",
      text: "Hmmmm.. Something doesn't look right.",
    },
    {
      title: "error",
      text: "Uh oh! Something went terribly wrong!",
    },
  ];

  const buttonArray = [
    { btnTitle: "Dismiss", text: "text" },
    { btnTitle: "Allow", text: "text" },
  ];
  return (
    <div className="wrapper">
      <Toast message={messageArray[0]}>
        <ToastMessage message={messageArray[0]} />
        <ToastButton button={buttonArray[0]} />
      </Toast>
      <Toast message={messageArray[1]}>
        <ToastMessage message={messageArray[1]}>
          <p className="toast__message-text">This is Second Paragraph</p>
        </ToastMessage>
        <ToastButton button={buttonArray[0]} />
      </Toast>
      <Toast message={messageArray[2]}>
        <ToastMessage message={messageArray[2]} />
        <ToastButton button={buttonArray[1]} />
        <ToastButton button={buttonArray[0]} />
      </Toast>
    </div>
  );
}

export default App;
