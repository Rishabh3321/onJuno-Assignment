import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router";
import DatePicker from "react-datepicker";
import { userContext } from "../../hooks/users";
import { useHistory } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const EditUser = () => {
  const { id } = useParams();
  const { updateUser, users } = useContext(userContext);
  const history = useHistory();

  const [user, setUser] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  const onAdduser = (e) => {
    e.preventDefault();
    let updatedUser = user;
    updatedUser["dob"] = startDate;
    if (user.firstName === "" && user.lastName === "" && user.middleName === "")
      window.alert("Atleast fill the name");
    else {
      updateUser(updatedUser);
      setTimeout(() => history.push("/"), 300);
    }
  };

  const onDetailsChange = (e) => {
    let updatedUser = user;
    updatedUser[e.target.name] = e.target.value;
    setUser(updatedUser);
  };

  useEffect(() => {
    console.log(users[id]);
    setStartDate(users[id].dob);
    setUser(users[id]);
  }, [id, users]);

  return (
    id && (
      <div className="container">
        <form onSubmit={onAdduser}>
          <div className="input-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              onChange={onDetailsChange}
              defaultValue={user.firstName}
            ></input>
          </div>
          <div className="input-group">
            <label>Middle Name</label>
            <input
              type="text"
              name="middleName"
              onChange={onDetailsChange}
              defaultValue={user.middleName}
            ></input>
          </div>
          <div className="input-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              onChange={onDetailsChange}
              defaultValue={user.lastName}
            ></input>
          </div>
          <div className="input-group">
            <label>DOB</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showMonthDropdown
              showYearDropdown
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={onDetailsChange}
              defaultValue={user.email}
            ></input>
          </div>
          <div className="input-group">
            <label htmlFor="country">Country</label>
            <select
              id="country"
              name="country"
              onChange={onDetailsChange}
              defaultChecked={user.country}
            >
              <option value="=india">INDIA</option>
              <option value="usa">USA</option>
              <option value="australia">Australia</option>
              <option value="uk">UK</option>
            </select>
          </div>
          <div className="input-group">
            <label>Position</label>
            <input
              type="text"
              name="position"
              onChange={onDetailsChange}
              defaultValue={user.position}
            ></input>
          </div>
          <div className="center">
            <input type="submit" value="Edit User" />
          </div>
        </form>
      </div>
    )
  );
};

export default EditUser;
