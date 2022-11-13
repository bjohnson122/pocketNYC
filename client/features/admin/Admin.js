import React from "react";
import { useSelector } from "react-redux";

function Admin() {
  const { firstName, lastName } = useSelector((state) => state.auth.me);

  return (
    <div>
      <h1>
        Welcome, {firstName} {lastName}!
      </h1>
      <br />
      <h2>
        Pending Events Here
        <hr />
        Edit a User Here
        <hr />
        All Users Here
      </h2>
    </div>
  );
}

export default Admin;
