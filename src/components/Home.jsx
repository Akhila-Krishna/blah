import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button, Form, Figure } from 'react-bootstrap';
import './Home.css';


export default class Home extends Component{
    render() {
        return(
            <Container>
                <h1>Login Here!</h1>
                <Image src = "assets/logo.png" className = "right" />
                <Col xs={6} className = "right">
                <Form className = "bottom">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="danger" type="submit">
                    Submit
                    </Button>
                    </Form>
                </Col>
            </Container>
        )
    }
}