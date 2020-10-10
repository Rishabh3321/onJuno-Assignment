import React, { useState } from "react";
// First Name
// Middle Name
// Last Name
// DOB
// Country
// Email
// Position

export const details = [
  "id",
  "firstName",
  "middleName",
  "lastName",
  "dob",
  "country",
  "email",
  "position",
  "edit",
  "delete",
];

const usersData = [
  {
    id: "87c858d0-0731-4797-8cea-17871fec92a3",
    firstName: "John",
    middleName: "",
    lastName: "Doe",
    dob: new Date(),
    country: "US",
    email: "johndoe@gmail.com",
    position: "Senior Developer",
  },
  {
    id: "48eb9922-59a4-4531-95eb-2d3e28d9f62d",
    firstName: "Rishabh",
    middleName: "",
    lastName: "Mishra",
    dob: new Date(),
    country: "India",
    email: "rishabhmishra3321@gmail.com",
    position: "Frontend Developer Intern",
  },
];

export const userContext = React.createContext();

export const Provider = ({ children }) => {
  const [users, setUsers] = useState(usersData);

  const addUser = (newUser) => {
    let updatedUsers = users;
    updatedUsers.push(newUser);
    setUsers(updatedUsers);
  };

  const updateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
  };

  const deleteUser = (id) => {
    const updatedUsers = users.map((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <userContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {children}
    </userContext.Provider>
  );
};

export const Consumer = userContext.Consumer;
