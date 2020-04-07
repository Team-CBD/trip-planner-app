import React, { Component } from "react";

class FriendsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        friends: [
            {name: "Coco Chanel", relation: "Girlfriend", number: "951-123-4567"},
            {name: "Tommy Hilfiger", relation: "Friend", number: "951-123-4567"},
            {name: "Marc Jacobs", relation: "Family", number: "951-123-4567"}
            
        ]    
    };
} 
  
    renderFriends() {
        return (
          <ul className="card-body">
            {this.state.friends.map(friends => (
              <li className="col card shadow-sm center m-2 p-2">
                <div className="card-title">{friends.name}</div> {friends.relation}<br/> {friends.number}
              </li>
            ))}
          </ul>
        );
      }
      render() {
        return (

            
          <div className="row justify-content-center">
          
            {this.renderFriends()}
            </div>
                 
        );
      }

}
export default FriendsList;