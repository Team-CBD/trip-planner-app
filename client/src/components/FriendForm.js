import React, { Component } from "react";

class FriendForm extends Component {
    constructor(props){
        super(props);
        this.state=  {name: "", relation: "", number: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    


handleChange(evt){
    this.setState({
        [evt.target.name]: evt.target.value});
}

handleSubmit(evt) {
    evt.preventDefault();
   this.props.addFriend(this.state);
   this.setState({name: "", relation: "", number: ""});
    

    
}

    render(){
        return(
           <div>
             <h1 className="text-dark">Save Friend Details</h1>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text" placeholder="Full Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  /><br/>
                  <input type="text" placeholder="Relation" 
                  name="relation"
                  value={this.state.relation}
                  onChange={this.handleChange}/><br/>
                  <input type="tel" placeholder="Phone" 
                  name="number"
                  value={this.state.number}
                  onChange={this.handleChange} /><br/>
                  <button className="btn btn-primary">Save</button>
              </form>
           </div>
        );
    }
}

export default FriendForm;