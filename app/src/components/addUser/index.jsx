import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DatePicker from "react-datepicker";
import { userContext } from "../../hooks/users";
import { useHistory } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";

const AddUser = () => {
  const [user, setUser] = useState({
    id: uuidv4(),
    firstName: "",
    middleName: "",
    lastName: "",
    country: "India",
    email: "",
    position: "",
  });
  const [startDate, setStartDate] = useState(new Date());

  const { addUser } = useContext(userContext);
  const history = useHistory();

  const onAdduser = (e) => {
    e.preventDefault();
    let updatedUser = user;
    updatedUser["dob"] = startDate;
    if (user.firstName === "" && user.lastName === "" && user.middleName === "")
      window.alert("Atleast fill the name");
    else {
      addUser(updatedUser);
      setTimeout(() => history.push("/"), 300);
    }
  };

  const onDetailsChange = (e) => {
    let updatedUser = user;
    updatedUser[e.target.name] = e.target.value;
    setUser(updatedUser);
  };
  return (
    <div className="container">
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
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showMonthDropdown
            showYearDropdown
          />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" name="email" onChange={onDetailsChange}></input>
        </div>
        <div className="input-group">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            onChange={onDetailsChange}
            defaultChecked="india"
          >
            <option value="=india">INDIA</option>
            <option value="usa">USA</option>
            <option value="australia">Australia</option>
            <option value="uk">UK</option>
          </select>
        </div>
        <div className="input-group">
          <label>Position</label>
          <input type="text" name="position" onChange={onDetailsChange}></input>
        </div>
        <div className="center">
          <input type="submit" value="Add User" />
        </div>
      </form>
    </div>
  );
};

export default AddUser;
