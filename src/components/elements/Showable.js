import React from "react";

const Showable = (props) => {
    if (!props.error) {
        return null
    };
    
  return (
    <div className="jumbotron">
      <h1>Hello, world!</h1>
      <p>...</p>
      <p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </p>
    </div>
  );
};

export default Showable;
