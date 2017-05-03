// UserCard.js
import React from "react";
import Button from "./elements/Button";

const UserCard = ({ user, onDelete }) => {
  const { first_name, last_name, avatar } = user;
  const id = first_name+last_name;

  // Set the CSS max-width attribute directly in the
  // element. `style` accepts a JS object and the
  // attributes use camelcase. See docs for more info.
  // Also using new card class for Bootstrap 4.
  return (
    <div id={id} className="UserCard card" style={{ maxWidth: `128px` }}>
      <img className="card-img-top img-fluid" src={avatar} alt="user avatar" />
      <div className="card-block">
        <h4>{first_name} {last_name}</h4>
      </div>
      <Button onDelete={onDelete} color={"danger"} id={id}/>
    </div>
  );
};
export default UserCard;
