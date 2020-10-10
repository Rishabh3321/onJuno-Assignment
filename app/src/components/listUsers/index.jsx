import React, { useContext } from "react";
import { userContext } from "../../hooks/users";
import "./style.css";

const ListUsers = () => {
  const { users } = useContext(userContext);

  const renderTableHeader = () => {
    console.log(users[0], "<---");
    let header = Object.keys(users[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const renderTableData = () => {
    return users.map((user, index) => {
      const {
        id,
        firstName,
        middleName,
        lastName,
        dob,
        country,
        email,
        position,
      } = user; //destructuring
      return (
        <tr key={id}>
          <td>{index + 1}</td>
          <td>{firstName || " - "}</td>
          <td>{middleName || " - "}</td>
          <td>{lastName || " - "}</td>
          <td>{dob.toJSON().slice(0, 10) || " - "}</td>
          <td>{country || " - "}</td>
          <td>{email || " - "}</td>
          <td>{position || " - "}</td>
        </tr>
      );
    });
  };

  return (
    users && (
      <div>
        <table className="users">
          <tbody>
            <tr>{renderTableHeader()}</tr>
            {renderTableData()}
          </tbody>
        </table>
      </div>
    )
  );
};

export default ListUsers;
