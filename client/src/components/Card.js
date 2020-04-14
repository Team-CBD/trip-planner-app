import React, { Component } from 'react';
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import Trip from "./Trip";



class CardElement extends Component {


    render() {
        return (
            <div className="row neu card">
                <div className="col-sm-6 p-3">
                    <Trip />
                </div>
            </div>
        );
    }

}



export default CardElement;