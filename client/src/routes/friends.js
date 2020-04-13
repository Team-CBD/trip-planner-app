import React from "react";
import FriendsList from "../components/FriendsList";
import FriendForm from "../components/FriendForm";
import '../styles/style.css'



function Friends() {
  return (
    <div className="container">

      <h2 className="ptitle text-dark">Friends</h2>

      <div className="row">
        <div className="col-sm-6">
          <FriendsList />
          
        </div>
        <div className="col-sm-6">
          <FriendForm />
        </div>
      </div>
    </div>
  );
}

export default Friends;