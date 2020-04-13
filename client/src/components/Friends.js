import React, { Component } from "react";
import FriendForm from "./FriendForm";

class FriendData extends Component {
    constructor(props) {
        super(props);
        this.state = {
        friends: []    
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
                <div className="card-title">{friends.fullname}</div> {friends.relation}<br/> {friends.number}
              </li>
            ))}
          </ul>
        );
      }
      render() {
        return (

            
          <div className="justify-content-center">
            <div className="justify-content-center">
          {/* <FriendForm addFriend={this.addFriend} /> */}
          <FriendForm fullname = {this.state.fullname}
                handleChange = {this.handleChange}
                relation = {this.state.relation}
                phone = {this.state.phone}
                handleSubmit = {this.handleSubmit}                />
            </div>
            </div>
                 
        );
      }

}
export default FriendData;