import React, { useState } from "react";

const AddUser = () => {
  const [user, setUser] = useState();
  const onAdduser = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div>
      <form onSubmit={onAdduser}>
        <div className="input-group">
          <label>First Name</label>
          <input type="text"></input>
        </div>
        <div className="input-group">
          <label>Middle Name</label>
          <input type="text"></input>
        </div>
        <div className="input-group">
          <label>Last Name</label>
          <input type="text"></input>
        </div>
        <div className="input-group">
          <label>DOB</label>
          <input type="text"></input>
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="text"></input>
        </div>
        <div className="input-group">
          <label>Country</label>
          <input type="text"></input>
        </div>
        <div className="input-group">
          <label>Position</label>
          <input type="text"></input>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
