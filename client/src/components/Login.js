import React, { Component } from "react";
import '../styles/style.css';
import axios from "axios";

class Login extends Component {
    state = {
        email: null,
        password: null,
        login : false
    }
    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     });
    //     console.log(this.state[e.target.name])
    // }
    handleChange = (e) => {
        console.log(this.state[e.target.name]);
        this.setState({message: e.target.value}, this.handleSubmit);
    }
    handleSubmit = (e) => {
        //e.preventdefault();
        // this.setState({email:e.target.value, password: e.target.value});
        axios.post('api/auth/login', {email:this.state.email,password:this.state.password, })
            .then((user) => {
            console.log(user.data)
            }).catch(err => console.log(err));
        }
render(){
    return(
        <div className="col-lg-8 offset-lg-2">
            <form name="form" onSubmit={this.handleSubmit}> 
                <div className="form-group">
                    <label className="pr-2">Email: </label>
                    <input className="p-2 neuflip" type="email" name="email" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label className="pr-2">Password: </label>
                        <input className="p-2 neuflip" type="password" name="password" onChange={this.handleChange}/>
                </div>
                <div>
                    <button className="btn buttonz btn-primary text-dark neu">Login</button>
                </div>
            </form>
        </div>
    );
  }
}  
export default Login;