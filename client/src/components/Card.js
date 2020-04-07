import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



class CardElement extends Component{
    render(){
        return(
        <Card className="card">
            <Card.Img variant="top" src="data:image/jpeg;base64,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" />
            <Card.Body>
            <Card.Title>Rome Trip</Card.Title>
            <Card.Text>
                Our trip to Italy we will visit the Roman Colosseium
            </Card.Text>
            <Button variant="primary">Check Details</Button>
            </Card.Body>
        </Card>
        
        );
    }

}



export default CardElement;