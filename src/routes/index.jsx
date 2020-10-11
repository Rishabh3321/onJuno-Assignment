import React from "react";
import { Route, Switch } from "react-router";
import AddUser from "../components/addUser";
import EditUser from "../components/editUser";
import ListUsers from "../components/listUsers";
import Layout from "../layout";

const Routes = () => {
  return (
    <Switch>
      <Layout>
        <Route path="/" exact component={ListUsers} />
        <Route path="/add" exact component={AddUser} />
        <Route path="/edit/:id" exact component={EditUser} />
      </Layout>
    </Switch>
  );
};

export default Routes;
