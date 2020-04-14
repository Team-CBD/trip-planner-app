import React from 'react'
import CardElement from '../components/Card'
import TripForm from '../components/TripForm'
import '../styles/style.css'
//import API from '../utils/api';
//import Trip from "../components/Trip";
import ModalElement from "../components/Modals";



class Home extends React.Component {
  state = {
    trips: [],
    
      destination: "",
      startDate: "",
      endDate: ""
      
    
  }


  render() {
    return (
      <div>
        <div className="container">
          <div className="row justify-content-center">
          <h2 className="text-dark col-sm-12">Dashboard</h2>
          <div className="col-md">
              <div className="sidebar">
              <div className="fb-login mt-3 pt-3">
                <ModalElement />
                <TripForm />
                </div>
                <div className="mt-4 pt-3">
                
                {/* <TripForm destination = {this.state.destination}
                handleChange = {this.handleChange}
                startDate = {this.state.startDate}
                endDate = {this.state.endDate}
                handleSubmit = {this.handleSubmit}                /> */}
               </div>
                <h4 className="text-center text-dark pt-3"> </h4>
                </div>
            </div>
            <div className="col-md-7">

              <CardElement />

            </div>

            
          </div>

        </div>
        </div>
     
    );
  }

}
export default Home;