import React from "react";

const InputGroup = props => {
  const { name, labelText } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{labelText}</label>;
    </div>
  );
};

export default InputGroup;
