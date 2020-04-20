// import React from "react";
// import API from '../utils/api';
// import '../styles/style.css';
// import axios from "axios";
// import { Link } from "react-router-dom";




// class Register extends React.Component {
   
//      state = {
//         user: {},
        

//         fName: "",
//         lName: "",
//         email: "",
//         password: "",
        
//      }
    
     
   
//     addUser = () => {
//         const data = {
//          fName: this.state.fName,
//          lName: this.state.lName,
//          email: this.state.email,
//          password: this.state.password
         
//         }
               
//         if(data.fName === "") {
//             this.setState({errorMessage: true, errorMessage2: false, errorMessage3: false, errorMessage4: false}, function(){
//                 console.log(this.state);
//             })
//             return;
        
//         } 
//         if(data.lName === ""){
//             this.setState({errorMessage: false, errorMessage2: true, errorMessage3: false, errorMessage4:false})
//             return;
//         } 

//         if(data.email === ""){
//             this.setState({errorMessage: false, errorMessage2: false, errorMessage3: true, errorMessage4:false})
//             return;
//         } 
//         if(data.password === ""){
//             this.setState({errorMessage: false, errorMessage2: false, errorMessage3: false, errorMessage4:true})
//             return;
//         } 
       
//         API.addUser(data).then(res => {
//             console.log(res)
//         });

    
//     }


 
//      handleChange= (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//      }
 
//      handleSubmit = (e) => {
//          e.preventDefault();
//         this.addUser();


        
//      }
//      render() {
//      return (
//          <div className="col-lg-8 offset-lg-2">
//              <h2>Register</h2>
//              <form name="form" onSubmit={this.handleSubmit}>
//                  <div className="form-group">
//                      <label>First Name</label>
//                      <input className="neuflip" type="text" name="fName" value={this.fName} onChange={this.handleChange} />
//                      { this.state.errorMessage &&
//                          <div className="text-danger">First Name is required
//                            </div> }     
//                  </div>
//                  <div className="form-group">
//                      <label>Last Name</label>
//                      <input className="neuflip" type="text" name="lName" value={this.lName} onChange={this.handleChange}  />
//                      { this.state.errorMessage2 &&
//                          <div className="text-danger">Last Name is required
//                            </div> } 
                     
//                  </div>
//                  <div className="form-group">
//                      <label>Enter Email</label>
//                      <input className="neuflip" type="text" name="email" value={this.email} onChange={this.handleChange} />
//                      { this.state.errorMessage3 &&
//                          <div className="text-danger">Email is required
//                           </div> } 
                        
                     
//                  </div>
//                  <div className="form-group">
//                      <label>Password</label>
//                      <input className="neuflip" type="password" name="password" value={this.password} onChange={this.handleChange}  />
//                      { this.state.errorMessage4 &&
//                          <div className="text-danger">Password is required
//                            </div> } 
//                  </div>

                 
//                  <div className="form-group">
//                      <button className="btn buttonz btn-primary neu text-dark" >
//                          Register
//                      </button>
//                      {/* <Link to="/converter" className="btn btn-link">Cancel</Link> */}
//                  </div>
//              </form>
//          </div>
//      );
//  }

// } 
 
//  export default Register;