import React from "react";
import DeleteBtn from './DeleteBtn';
import API from '../utils/api';
import '../styles/style.css'


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
          <li key={friends.name}>
            <div className="row card shadow bg-light center m-5 pt-3">
              <h5 className="m-2 pt-5 neu zPage" id="profileImage">{friends.fullName}</h5>
              <h3 className="col-sm">{friends.relation}</h3>
              <a type="tel" className="card-footer pt-3" >
                <svg class="bi bi-phone" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M11 1H5a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V2a1 1 0 00-1-1zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z" clip-rule="evenodd" />
                <path fill-rule="evenodd" d="M8 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg> 
              {friends.phone}<DeleteBtn onClick={() => deleteFriend(friends._id)} /></a></div>

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