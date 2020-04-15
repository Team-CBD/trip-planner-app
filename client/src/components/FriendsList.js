import React from "react";
import DeleteBtn from './DeleteBtn';
import API from '../utils/api';


function FriendsList(props) {
  
  function refreshPage() {
    window.location.reload(false);
  }

  function deleteFriend(id) {
    API.deleteFriend(id)
      window.location.reload(false);
      refreshPage();
  }

  function renderFriends() {

    return (
      <ul className="card-body">
        {props.friends.map(friends => (
          <li key={friends.name} className="col card neu center m-2 p-2">
            <div className="card-title">{friends.fullName}</div> {friends.relation}<br /> {friends.phone}
            <div className="col-sm-1 offset-11"><DeleteBtn onClick={() => deleteFriend(friends._id)} /></div>
          </li>
        ))}
      </ul>
    );
  }



    return (


      <div className="justify-content-center">

        {renderFriends()}
      </div>

    );
  

}
export default FriendsList;