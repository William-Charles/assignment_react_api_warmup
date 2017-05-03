// Convert to a functional component and use props
// instead of state for users and isFetching

import React from "react";
import UserCard from "./UserCard";

const UserList = ({ users, isFetching, onDelete }) => {
  const userList = users.map(user => (
    <UserCard onDelete={onDelete} user={user} key={user.id} />
  ));

  return (
    <div className="container">
      <h1>User List</h1>
      <div className="card-group">
        {isFetching ? <p>Loading...</p> : userList}
      </div>
    </div>
  );
};

export default UserList;
