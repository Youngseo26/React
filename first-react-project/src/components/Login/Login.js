import React, {
  useCallback,
  useContext,
  useReducer,
  useRef,
  useState,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../context/AuthContext";
import Input from "../UI/Input/Input";
import DummyText from "../UI/DummyText";

const emailReducer = (state, action) => {
  //값이 바뀌는 경우, setEnteredEmail
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.includes("@"),
    };
  }

  //유효성 검사를 해야하는 경우, setEmailIsValid
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.includes("@"),
    };
  }

  return {
    value: "",
    isValid: null,
  };
};
const passwordReducer = (state, action) => {
  //값이 바뀌는 경우, setEnteredPassword
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6,
    };
  }

  //유효성 검사를 해야하는 경우, setPasswordIsValid
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }

  return {
    value: "",
    isValid: null,
  };
};

const Login = (props) => {
  const context = useContext(AuthContext);
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();

  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  // useEffect(() => {
  //   console.log("EFFECT RUNNING");

  //   return () => {
  //     console.log("EFFECT CLEANUP");
  //   };
  // }, []);

  //const { isValid: emailIsValid } = emailState;
  // const { isValid: passwordIsValid } = passwordState;

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log("check validity!");
  //     // setFormIsValid(
  //     //   emailState.value.trim().length > 6 && passwordState.value.includes("@")
  //     // );
  //   }, 500);

  //   return () => {
  //     console.log("clean up");
  //     clearTimeout(identifier);
  //   };
  // }, [emailState.value, passwordState.value]);

  const emailChangeHandler = (event) => {
    //setEnteredEmail(event.target.value);
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    //setEnteredPassword(event.target.value);
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const validateEmailHandler = () => {
    //setEmailIsValid(enteredEmail.includes("@"));
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    //setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event, props) => {
    event.preventDefault();
    if (formIsValid) {
      context.onLogin(emailState.value, passwordState.value);
    } else if (!emailState.value) {
      //email focus
      emailInputRef.current.focus();
    } else {
      //pw focus
      passwordInputRef.current.focus();
    }
  };

  console.log("Parent Component rendered!");
  const foo = useCallback(() => {}, []);
  const [text, setText] = useState("youngseo");
  return (
    <>
      <Card className={classes.login}>
        <form onSubmit={submitHandler}>
          <Input
            isValid={emailState.isValid}
            label={"이메일"}
            type={"email"}
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
            ref={emailInputRef}
          />
          <Input
            isValid={passwordState.isValid}
            label={"password"}
            type={"password"}
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
            ref={passwordInputRef}
          />
          <div className={classes.actions}>
            <Button type="submit" className={classes.btn}>
              로그인
            </Button>
          </div>
        </form>
      </Card>
      <DummyText func={foo} />
      <button onClick={() => setText("Myounggon")}>
        Component re-evaluating
      </button>
    </>
  );
};

export default Login;
