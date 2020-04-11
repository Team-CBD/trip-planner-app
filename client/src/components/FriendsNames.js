import React, { Component } from "react";

class FriendsNames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [
        { name: "Coco Chanel", relation: "Girlfriend", number: "951-123-4567" },
        { name: "Tommy Hilfiger", relation: "Friend", number: "951-123-4567" },
        { name: "Marc Jacobs", relation: "Family", number: "951-123-4567" }

      ]
    };
  }
  renderFriendsNames() {
    return (
      <ul className="card-body">
        {this.state.friends.map(friends => (
          <li key={friends.name} className="col card neu center m-2 p-2">
            <div className="card-title">{friends.name}</div> 
          </li>
        ))}
      </ul>
    );
  }


  render() {
    return (


      <div className="justify-content-center">

        {this.renderFriendsNames()}
      </div>

    );
  }

}
export default FriendsNames;