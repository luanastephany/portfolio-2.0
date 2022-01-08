import React from "react";
import { Btn } from "./styled";

const Button = (props) => {
  return <Btn>{props.children}</Btn>;
};

export default Button;
