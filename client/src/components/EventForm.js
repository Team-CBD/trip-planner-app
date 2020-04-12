import React, { Component } from "react";

class EventForm extends Component {
    constructor(props){
        super(props);
        this.state=  {city: "", description: "", date: ""};
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
   this.setState({city: "", description: "", date: ""});
    

    
}

    render(){
        return(
           <div>
             
              <form onSubmit={this.handleSubmit}>
                <input className="neuflip m-2 p-2" 
                  type="text" id="city" placeholder="City Name"
                  name="city"
                  value={this.state.city}
                  onChange={this.handleChange}
                  />
                  <br/>
                  <textarea type="textarea" rows="4" cols="24" className="neuflip m-2 p-2"  placeholder="Brief Description of Trip" 
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}/><br/>
                  <input type="date"
                  className="neuflip m-2 p-2"
                  placeholder="Date of your trip"
                  name="date"
                  value={this.state.date}
                  onChange={this.handleChange} /><br/>
                  
                  <button id="submit" className="btn neu">Save</button>
              </form>
           </div>
        );
    }
}

export default EventForm;