import React, { component } from "react";
import Child from "./Classworks/Child";
const UserName = ({ user }) => {
  return (
    <div>
      <h2>Company: {user.post.company}</h2>
      <p>User-name: {user.post.name}</p>
      <p>Interviewed: {user.interviewed ? "true" : "false"}</p>
      <Child user={user} />
    </div>
  );
};

export default UserName;
