import React, { Component } from "react";
import '../styles/style.css';
import axios from "axios";


class Login extends Component {
    state = {
        
        email: null,
        password: null,
        login : false

    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    handleSubmit = (e) => {
        e.preventdefault();
        this.setState({email:e.target.value,
                password: e.target.value});
 
        axios.post('api/auth/login')
            .then((user) => {
            console.log(user.data)
            });
        }


    render(){
        return(

            <div className="col-lg-8 offset-lg-2">
                <form name="form" onSubmit={this.handleSubmit}> 
                    <div className="form-group">
                        <label className="pr-2">Email: </label>
                        <input className="p-2 neuflip" type="text" name="email" value={this.email}/>
                    </div>
                    <div className="form-group">
                        <label className="pr-2">Password: </label>
                            <input className="p-2 neuflip" type="password" name="password" value={this.password}/>
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