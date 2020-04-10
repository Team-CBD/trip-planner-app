import React, { Component } from "react";
import API from '../utils/api'

class TripForm extends Component {
    constructor(props){
        super(props);
        this.state=  {trip: "", startdate: "", enddate: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    


handleChange(evt){
    this.setState({
        [evt.target.name]: evt.target.value});
        console.log(this.state[evt.target.name]);
}

handleSubmit(evt) {
    evt.preventDefault();
   this.props.addTrip(this.state);
   this.setState({trip: "", startdate: "", enddate: ""});

}

    render(){
        return(
           <div>
             <h4 className="text-dark">Create Trip</h4>
              <form onSubmit={this.handleSubmit}>
                <input className="neuflip m-2 p-2" 
                  type="text" id="trip" placeholder="Trip Name"
                  name="trip"
                  value={this.state.trip}
                  onChange={this.handleChange}
                  />
                  <br/>
                  <input type="date"
                  className="neuflip m-2 p-2"
                  placeholder="Start Date"
                  name="startdate"
                  value={this.state.startdate}
                  onChange={this.handleChange} /><br/>
                  <input type="date"
                  className="neuflip m-2 p-2"
                  placeholder="End Date"
                  name="enddate"
                  value={this.state.enddate}
                  onChange={this.handleChange} /><br/>
                  <button id="submit" className="btn neu">Save</button>
              </form>
           </div>
        );
    }
}

export default TripForm;