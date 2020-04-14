import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Trip from "./Trip";



class CardElement extends Component{

      
    render(){
        return(
        
        <Card className="neu">
            <Card.Img variant="top" src="" />
            <Card.Body>
            <Card.Title>Rome Trip</Card.Title>
            <Card.Text>
                <Trip />
            </Card.Text>
            <Button href="/EventCreate" className="neu buttonz" variant="primary">Check Details</Button>
            </Card.Body>
        </Card>
        
        );
    }

}



export default CardElement;