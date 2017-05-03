import React from "react";

const Button = props => {
  const { color, type } = props;

  const buttonClass = `btn btn-${color}`;
  return <button className={buttonClass} type={type}>submit</button>;
};

export default Button;
