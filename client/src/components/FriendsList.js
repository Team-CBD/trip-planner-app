import React, { Component } from "react";


function FriendsList(props) {
  
  // function renderFriendNames() {
  //   return (
  //     <ul className="card-body">
  //       {this.state.friends.map(friends => (
  //         <li key={friends.name} className="col card neu center m-2 p-2">
  //           <div className="card-title">{friends.name}</div>
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }
  function renderFriends() {
    return (
      <ul className="card-body">
        {props.friends.map(friends => (
          <li key={friends.name} className="col card neu center m-2 p-2">
            <div className="card-title">{friends.fullName}</div> {friends.relation}<br /> {friends.phone}
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