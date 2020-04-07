import React from 'react';
import CardElement from '../components/Card'


function Home() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div className="col-md-9">
            <h2 className="text-dark">Dashboard</h2>
          
          
          <CardElement />
          
          

          </div>

            
            <div className="col-md-3">
              <div className="sidebar">
               
                <h5 className="text-center text-dark">Friends List</h5>

                

              </div>
            </div>
    </div>

  </div>

      </div>
    );
    
  
  }
  export default Home;