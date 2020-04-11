import React, { Component } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

 class Facebook extends Component {
    state = {
        auth: false,
        name: "",
        picture: ""
    }

    componentClicked = () => {
        console.log("button clicked");
    }
    
    responseFacebook = (response) => {
        if(response.status !== "unknown")
        this.setState({
            auth: true,
            name: response.name,
            picture: response.picture.data.url,
            email: response.email

        });
    }
    render(){
        let facebookData;
        
        this.state.auth ?
            facebookData = (
                <div>
                    <img className="neu right" src={this.state.picture} alt={this.state.name} />
                    <h4 className="left">Welcome {this.state.name}</h4>
                    
                </div>
            ) :

            facebookData = (
                <FacebookLogin
                appId="259668991860796"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                />
              
            );

        return(
            <>
              {facebookData}

            </>
            
        );
    }
}

export default Facebook;