import React from 'react';
import CardElement from '../components/Card'
import FriendsList from '../components/FriendsList'



function Home() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div className="col-md-7 offset-1">
            <h2 className="text-dark">Dashboard</h2>
          
          
          <CardElement />
          
          

          </div>

            
            <div className="col-md-3">
              <div className="sidebar">
               
                <h5 className="text-center text-dark">Friends List</h5>
                <FriendsList />
                

              </div>
            </div>
    </div>

  </div>

      </div>
    );
    
  
  }
  export default Home;