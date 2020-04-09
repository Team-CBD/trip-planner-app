import React, { Component } from "react";
import FriendForm from "./FriendForm";

class FriendData extends Component {
    constructor(props) {
        super(props);
        this.state = {
        friends: [
            {name: "Coco Chanel", relation: "Girlfriend", number: "951-123-4567"},
            {name: "Tommy Hilfiger", relation: "Friend", number: "951-123-4567"},
            {name: "Marc Jacobs", relation: "Family", number: "951-123-4567"}
            
        ]    
    };
    this.addFriend = this.addFriend.bind(this);
} 
  
    addFriend(friend){
        this.setState(state => ({
            friends: [...state.friends, friend]
        }))
    }

    renderFriends() {
        return (
          <ul className="card-body">
            {this.state.friends.map(friends => (
              <li className="col card neu center m-2 p-2">
                <div className="card-title">{friends.name}</div> {friends.relation}<br/> {friends.number}
              </li>
            ))}
          </ul>
        );
      }
      render() {
        return (

            
          <div className="justify-content-center">
            <div className="justify-content-center">
          <FriendForm addFriend={this.addFriend} />
            </div>
            </div>
                 
        );
      }

}
export default FriendData;