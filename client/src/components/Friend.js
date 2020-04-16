import React, { useState, useEffect } from 'react';
import DeleteBtn from './DeleteBtn';
import API from '../utils/api';
import { FriendList, FriendListSingle } from "./FriendList";
import '../styles/style.css';


function Friend() {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    loadFriends()
  }, [])

  function loadFriends() {
    API.getFriends()
    .then(res => 
      setFriends(res.data)
    )
    .catch(err => console.log(err));
  }

  function deleteFriend(id) {
    API.deleteFriend(id)
      .then(res => loadFriends())
      .catch(err => console.log(err));
  }



  return(
    <div className = "container">

      <div className = "friendList row pt-3">
        {friends.length ? (
          <FriendList>
            {friends.map(friend => (
              
              <FriendListSingle key={friend._id} className="col-sm-6">
                <Link to={"/api/friends/" + friend._id}>
                 <p>Name: {friend.fullName} Relation: {friend.relation} Phone: {friend.phone}</p>
                </Link>
                <DeleteBtn onClick={() => deleteFriend(friend._id)} />
              </FriendListSingle>
              
            ))}
          </FriendList>
        ) : (
          <div>No Friends Saved</div>
        )}
      </div>
    </div>
  )


}



export default Friend;