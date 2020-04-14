import React, { Component } from "react";
import '../styles/style.css';


class Login extends Component {
//     state = {
//         email: null,
//         password: null,
//         login : false

//     }
// }

// handleChange = (e) => {
//     this.setState({
//         [e.target.name]: e.target.value
//     })
// }


// handleSubmit = (e) => {
//     e.preventdefault();
//     setState({email:e.target.value,
//                password: e.target.value})
// }



render(){
    return(

        <div className="col-lg-8 offset-lg-2">
            <form name="form" onSubmit={this.handleSubmit}> 
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" name="email" value={this.email}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                        <input type="password" name="password" value={this.password}/>
                </div>
                <div>
                    <button className="btn btn-info neu">Login</button>
                </div>
            </form>
        </div>
        
    

    );
  }
}  



export default Login;