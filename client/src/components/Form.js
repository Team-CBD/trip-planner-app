import React, { Component } from "react";

class Form extends Component {
    constructor(props){
        super(props);
        this.state=  {city: "", description: "", date: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    


handleChange(evt){
    this.setState({
        [evt.target.name]: evt.target.value});
}

handleSubmit(evt) {
    evt.preventDefault();
   this.props.addTrip(this.state);
   this.setState({city: "", description: "", date: ""});
    

    
}

    render(){
        return(
           <div>
             <h1>Save your Trip Details</h1>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text" placeholder="City Name"
                  name="city"
                  value={this.state.city}
                  onChange={this.handleChange}
                  />
                  <input type="text" placeholder="Brief Description of Trip" 
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}/>
                  <input type="date" placeholder="Date of your trip" 
                  name="date"
                  value={this.state.date}
                  onChange={this.handleChange} />
                  <button>Submit</button>
              </form>
           </div>
        );
    }
}

export default Form;