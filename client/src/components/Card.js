import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



class CardElement extends Component{

      
    render(){
        return(
        
        <Card className="neu">
            <Card.Img variant="top" src="/static/media/florence.gif" />
            <Card.Body>
            <Card.Title>Florence Trip</Card.Title>
            <Card.Text>
                Our trip to Italy we will visit the Roman Colosseum
            </Card.Text>
            <Button href="/EventCreate" className="neu" variant="primary">Check Details</Button>
            </Card.Body>
        </Card>
        
        );
    }

}



export default CardElement;