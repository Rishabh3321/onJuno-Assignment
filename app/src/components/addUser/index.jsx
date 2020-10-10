import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { userContext } from "../../hooks/users";
import { useHistory } from "react-router-dom";
const AddUser = () => {
  const [user, setUser] = useState({
    id: uuidv4(),
    firstName: "",
    middleName: "",
    lastName: "",
    dob: new Date(),
    country: "",
    email: "",
    position: "",
  });

  const { addUser } = useContext(userContext);
  const history = useHistory();

  const onAdduser = (e) => {
    e.preventDefault();
    addUser(user);
    setTimeout(() => history.push("/"), 300);
  };

  const onDetailsChange = (e) => {
    let updatedUser = user;
    updatedUser[e.target.name] = e.target.value;
    setUser(updatedUser);
  };
  return (
    <div>
      <form onSubmit={onAdduser}>
        <div className="input-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={onDetailsChange}
          ></input>
        </div>
        <div className="input-group">
          <label>Middle Name</label>
          <input
            type="text"
            name="middleName"
            onChange={onDetailsChange}
          ></input>
        </div>
        <div className="input-group">
          <label>Last Name</label>
          <input type="text" name="lastName" onChange={onDetailsChange}></input>
        </div>
        <div className="input-group">
          <label>DOB</label>
          <input type="text" name="dob"></input>
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="text" name="email" onChange={onDetailsChange}></input>
        </div>
        <div className="input-group">
          <label>Country</label>
          <input type="text" name="country" onChange={onDetailsChange}></input>
        </div>
        <div className="input-group">
          <label>Position</label>
          <input type="text" name="position" onChange={onDetailsChange}></input>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddUser;
