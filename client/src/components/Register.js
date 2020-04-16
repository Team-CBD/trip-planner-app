import React from "react";
import API from '../utils/api';
import '../styles/style.css';
import axios from "axios";
import { Link } from "react-router-dom";




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
               
        if(data.fName == "") {
            this.setState({errorMessage: true, errorMessage2: false, errorMessage3: false, errorMessage4: false}, function(){
                console.log(this.state);
            })
            return;
        
        } 
        if(data.lName == ""){
            this.setState({errorMessage: false, errorMessage2: true, errorMessage3: false, errorMessage4:false})
            return;
        } 

        if(data.email == ""){
            this.setState({errorMessage: false, errorMessage2: false, errorMessage3: true, errorMessage4:false})
            return;
        } 
        if(data.password == ""){
            this.setState({errorMessage: false, errorMessage2: false, errorMessage3: false, errorMessage4:true})
            return;
        } 
        // API.addUser(data).then(res => {
        //     console.log(res)
        // })

    
    }

    componentDidMount() {
        // axios.get('http://localhost:3000/api/users/register')
        //   .then(res => this.setState({user: res.data}))
        //   .catch(err => { 
        //     this.setState({errorMessage: err.message});
        //   })
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
<<<<<<< HEAD
                     <label>First Name</label>
                     <input className="neuflip" type="text" name="fName" value={this.fName} onChange={this.handleChange} />
                     { this.state.errorMessage &&
                         <div className="text-danger">First Name is required
                           </div> }     
                 </div>
                 <div className="form-group">
                     <label>Last Name</label>
                     <input className="neuflip" type="text" name="lName" value={this.lName} onChange={this.handleChange}  />
                     { this.state.errorMessage2 &&
                         <div className="text-danger">Last Name is required
                           </div> } 
                     
                 </div>
                 <div className="form-group">
                     <label>Enter Email</label>
                     <input className="neuflip" type="text" name="email" value={this.email} onChange={this.handleChange} />
                     { this.state.errorMessage3 &&
                         <div className="text-danger">Email is required
                          </div> } 
                        
                     
                 </div>
                 <div className="form-group">
                     <label>Password</label>
                     <input className="neuflip" type="password" name="password" value={this.password} onChange={this.handleChange}  />
                     { this.state.errorMessage4 &&
                         <div className="text-danger">Password is required
                           </div> } 
=======
                     <label className="pr-2">First Name: </label>
                     <input className="p-2 neuflip" type="text" name="fName" value={this.fName} onChange={this.handleChange} />
                         <div className="invalid-feedback">First Name is required</div>
                 </div>
                 <div className="form-group">
                     <label className="pr-2">Last Name: </label>
                     <input className="p-2 neuflip" type="text" name="lName" value={this.lName} onChange={this.handleChange}  />
                     
                         <div className="invalid-feedback">Last Name is required</div>
                     
                 </div>
                 <div className="form-group">
                     <label className="pr-2">Enter Email: </label>
                     <input className="p-2 neuflip" type="text" name="email" value={this.email} onChange={this.handleChange} />
                     
                         <div className="invalid-feedback">Username is required</div>
                     
                 </div>
                 <div className="form-group">
                     <label className="pr-2">Password: </label>
                     <input className="p-2 neuflip" type="password" name="password" value={this.password} onChange={this.handleChange}  />
                         <div className="invalid-feedback">Password is required</div>
>>>>>>> 05fef5c9e785aac507f6e73264e847edca839096
                 </div>
                 <div className="form-group">
                     <button className="btn buttonz btn-primary neu text-dark" >
                         Register
                     </button>
                     <Link to="/home" className="btn btn-link">Cancel</Link>
                 </div>
             </form>
         </div>
     );
 }

} 
 
 export default Register;