import React, { Component } from 'react';
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import Trip from "./Trip";



class CardElement extends Component {


    render() {
        return (
            <div className="row">
                <div className="p-2">
                    <Trip />
                </div>
            </div>
        );
    }

}



export default CardElement;