import React from "react";
import { Route, Switch } from "react-router";
import AddUser from "../components/addUser";
import EditUser from "../components/editUser";
import ListUsers from "../components/listUsers";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={ListUsers} />
      <Route path="/add" exact component={AddUser} />
      <Route path="/edit" exact component={EditUser} />
    </Switch>
  );
};

export default Routes;
