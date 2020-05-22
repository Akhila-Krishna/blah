import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Jumbotron, Row, Col, Image, Button, Figure } from 'react-bootstrap';

export default class Contact extends Component{
    render() {
        return(
            <Container>
                <Row>
                    <Col>Phone Number</Col>
                    <Col>Gmail</Col>
                    <Col>LinkedIn</Col>
                    <Col>GitHUb</Col>
                </Row>
                <Row>
                    <Col>Instagram</Col>
                    <Col>Facebook</Col>
                    <Col>Twitter</Col>
                </Row>
            </Container>
        )
    }
}