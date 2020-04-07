import React from "react";
import FriendsList from "../components/FriendsList";
import FriendForm from "../components/FriendForm";

function Friends() {
  return (
    <div className="container">

      <h1 className="ptitle text-dark">Friends</h1>

      <div className="row">
        <div className="col-md-4 offset-2">
          <FriendForm />
        </div>
        <div className="col-md-4">
          <FriendsList />
        </div>
      </div>
      </div>
  );
}

export default Friends;