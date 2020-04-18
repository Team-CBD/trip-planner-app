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
          <h5 className="m-2 neu zPage" id="profileImage">{friends.fullName}</h5><h3 className="col-sm">{friends.relation}</h3> <button type="tel" className="card-footer pt-3" href={friends.phone}>{friends.phone}<DeleteBtn onClick={() => deleteFriend(friends._id)} /></button></div>
            
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