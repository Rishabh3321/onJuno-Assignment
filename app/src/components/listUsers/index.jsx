import React, { useContext } from "react";
import { userContext } from "../../hooks/users";

const ListUsers = () => {
  const { users } = useContext(userContext);
  console.log(users);
  return <div>All Users are here... </div>;
};

export default ListUsers;
