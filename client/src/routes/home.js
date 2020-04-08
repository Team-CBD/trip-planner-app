import React from 'react';
import CardElement from '../components/Card'
import FriendsList from '../components/FriendsList'



function Home() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div className="col-md-7 offset-1 justify-content-center">
            <h2 className="text-dark">Dashboard</h2>
          
          
          <CardElement />
          
          

          </div>

            
            <div className="col-md-4">
              <div className="sidebar">
               
                <h5 className="text-center text-dark pt-3">Friends List</h5>
                <FriendsList />
                

              </div>
            </div>
    </div>

  </div>

      </div>
    );
    
  
  }
  export default Home;