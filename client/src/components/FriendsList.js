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
          <li key={friends.name} className="col-sm row card neu center m-2 p-2">
            <div className="card-title">{friends.fullName}</div> <div className="card-body">{friends.relation}</div><br /> <div  className="card-footer">{friends.phone}<DeleteBtn onClick={() => deleteFriend(friends._id)} /></div>
            
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