import React from 'react';
import CardElement from '../components/Card'
import FriendsList from '../components/FriendsList'
import '../styles/style.css'



function Home() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div className="col-md-7 offset-1 justify-content-center">
            <h2 className="text-dark">Dashboard</h2>

            <CardElement />

          </div>

          <div className="col-md-3">
            <div className="sidebar">

              <h4 className="text-center text-dark pt-3">Friends List</h4>
              <FriendsList />


            </div>
          </div>
        </div>

      </div>

    </div>
  );


}
export default Home;