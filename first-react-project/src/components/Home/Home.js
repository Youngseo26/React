import React, { useContext } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Home.module.css";
import AuthContext from "../../context/AuthContext";

const Home = (props) => {
  const context = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>환영합니다.</h1>
      <Button onClick={context.onLogOut}>Logout</Button>
    </Card>
  );
};

export default Home;
