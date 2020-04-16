import React from "react";
import FriendsList from "../components/FriendsList";
import FriendForm from "../components/FriendForm";
import API from '../utils/api';
import '../styles/style.css';



class Friends extends React.Component {
  state = {
    friends: []
  }

componentDidMount() {
  this.loadFriend();
}

  loadFriend = () => {
    API.getFriends()
    .then(res => {
      console.log(res.data);
      this.setState({friends: res.data});

    })
    .catch(err => console.log(err));
  }
  render() {
  return (
    <div className="container mt-5">

      <h2 className="ptitle text-dark">Friends</h2>

      <div className="row">
        <div className="col-sm-6">
          <FriendsList friends = {this.state.friends}/>
          
        </div>
        <div className="col-sm-6">
          <FriendForm loadFriend = {this.loadFriend}/>
        </div>
      </div>
    </div>
  );
}
}
export default Friends;