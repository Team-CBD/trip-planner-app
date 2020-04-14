import React from "react";
import API from '../utils/api';



class Register extends React.Component {
     state = {
        user: [],

        fName: "",
        lName: "",
        email: "",
        password: ""
     }
   
    addUser = () => {
        const data = {
         fName: this.state.fName,
         lName: this.state.lName,
         email: this.state.email,
         password: this.state.password
        }
        console.log(this.state.user);
        API.addUser(data).then(res => {
            console.log(res)
        })
    
    }

 
     handleChange= (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
     }
 
     handleSubmit = (e) => {
         e.preventDefault();
        this.addUser();

        
     }
     render() {
     return (
         <div className="col-lg-8 offset-lg-2">
             <h2>Register</h2>
             <form name="form" onSubmit={this.handleSubmit}>
                 <div className="form-group">
                     <label>First Name</label>
                     <input type="text" name="fName" value={this.fName} onChange={this.handleChange} />
                         <div className="invalid-feedback">First Name is required</div>
                 </div>
                 <div className="form-group">
                     <label>Last Name</label>
                     <input type="text" name="lName" value={this.lName} onChange={this.handleChange}  />
                     
                         <div className="invalid-feedback">Last Name is required</div>
                     
                 </div>
                 <div className="form-group">
                     <label>Enter Email</label>
                     <input type="text" name="email" value={this.email} onChange={this.handleChange} />
                     
                         <div className="invalid-feedback">Username is required</div>
                     
                 </div>
                 <div className="form-group">
                     <label>Password</label>
                     <input type="password" name="password" value={this.password} onChange={this.handleChange}  />
                         <div className="invalid-feedback">Password is required</div>
                 </div>
                 <div className="form-group">
                     <button className="btn btn-danger">
                         Register
                     </button>
                     {/* <Link to="/login" className="btn btn-link">Cancel</Link> */}
                 </div>
             </form>
         </div>
     );
 }

} 
 
 export default Register;