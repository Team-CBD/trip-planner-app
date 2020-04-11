import React, { Component } from "react";
import FacebookLoginBtn from "react-facebook-login";

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
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2>Welcome {this.state.name}</h2>
                    <p>{this.state.email}</p>
                    
                </div>
            ) :

            facebookData = (
                <FacebookLoginBtn
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