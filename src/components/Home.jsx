import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button, Figure } from 'react-bootstrap';
import './Home.css';


export default class Home extends Component{
    render() {
        return(
            <Container>
                <h1>Hi, I am Akhila!</h1>
                <Row className = "person-wrapper">
                    <Image src = "assets/akhila.png" className = "profile-pic" />
                </Row>
            </Container>
        )
    }
}