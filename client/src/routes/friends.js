import React from "react";
import FriendsList from "../components/FriendsList";
import FriendForm from "../components/FriendForm";

function Friends() {
  return (
    <div className="container">

      <h2 className="ptitle text-dark">Friends</h2>

      <div className="row">
        <div className="col-sm-4">
          <FriendForm />
        </div>
        <div className="col-sm-4">
          <FriendsList />
        </div>
      </div>
      </div>
  );
}

export default Friends;