import React from "react";

const Button = props => {
  const { color, type, onDelete } = props;

  const buttonClass = `btn btn-${color}`;
  return (
    <button onClick={onDelete} className={buttonClass} type={type}>
      submit
    </button>
  );
};

export default Button;
