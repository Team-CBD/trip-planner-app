import React from "react";


function FriendForm ({ fullname, handleChange, relation, phone, handleSubmit }) {

        return(
           <div>
             <h4 className="text-dark">Add Friend</h4>
              <form onSubmit={handleSubmit}>
                <input className="neuflip m-2 p-2" 
                  type="text" id="fullname" placeholder="Full Name"
                  name="fullname"
                  onChange={event => handleChange(event)}
                  value={fullname}
                  />
                  <br/>
                  <input type="date"
                  className="neuflip m-2 p-2"
                  placeholder="Relation"
                  name="relation"
                  value={relation}
                  onChange={handleChange} /><br/>
                  <input type="date"
                  className="neuflip m-2 p-2"
                  placeholder="Phone"
                  name="phone"
                  value={phone}
                  onChange={handleChange} /><br/>
                  <button id="submit" className="btn neu">Next</button>
              </form>
           </div>
        );
    }


export default FriendForm;


// import React, { Component } from "react";

// class FriendForm extends Component {
//     constructor(props){
//         super(props);
//         this.state=  {name: "", relation: "", number: ""};
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
    


// handleChange(evt){
//     this.setState({
//         [evt.target.name]: evt.target.value});
// }

// handleSubmit(evt) {
//     evt.preventDefault();
//    this.props.addFriend(this.state);
//    this.setState({name: "", relation: "", number: ""});
    

    
// }

//     render(){
//         return(
//            <div>
//              <h4 className="text-dark">Add Friends</h4>
//               <form onSubmit={this.handleSubmit}>
//                 <input
//                   type="text" className="neuflip m-2 p-2" placeholder="Full Name"
//                   name="name"
//                   value={this.state.name}
//                   onChange={this.handleChange}
//                   /><br/>
//                   <input type="text" className="neuflip m-2 p-2" placeholder="Relation" 
//                   name="relation"
//                   value={this.state.relation}
//                   onChange={this.handleChange}/><br/>
//                   <input type="tel" className="neuflip m-2 p-2" placeholder="Phone" 
//                   name="number"
//                   value={this.state.number}
//                   onChange={this.handleChange} /><br/>
//                   <button className="btn btn-primary">Save</button>
//               </form>
//            </div>
//         );
//     }
// }

// export default FriendForm;