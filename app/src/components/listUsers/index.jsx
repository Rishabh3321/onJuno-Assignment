import React, { useContext } from "react";
import { details, userContext } from "../../hooks/users";
import { useHistory } from "react-router-dom";

import "./style.css";

const ListUsers = () => {
  const { users, deleteUser } = useContext(userContext);
  const history = useHistory();

  const renderTableHeader = () => {
    return details.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const onDelete = (id) => {
    const res = window.confirm("Do you realy want to delete this contact");
    if (res) {
      deleteUser(id);
    }
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
      } = user;
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
          <td>
            <i
              className="fas fa-user-edit"
              onClick={() => history.push(`/edit/${index}`)}
            ></i>
          </td>
          <td>
            <i
              className="fas fa-user-slash"
              onClick={() => {
                onDelete(id);
              }}
            ></i>
          </td>
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
