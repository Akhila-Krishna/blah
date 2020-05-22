import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component{
    render() {
        return(
            <Navbar expand="lg" bg="black" variant="dark">
            <Navbar.Brand href="Home">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/* <Nav.Link href="about">About</Nav.Link>
                    <Nav.Link href="skills">Skills</Nav.Link>
                    <Nav.Link href="projects">Projects</Nav.Link>
                    <Nav.Link href="contact">Contact</Nav.Link> */}
                </Nav>
                <Nav>
                    <Nav.Link href="about">About</Nav.Link>
                    <Nav.Link href="skills">Skills</Nav.Link>
                    <Nav.Link href="projects">Projects</Nav.Link>
                    <Nav.Link href="contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}
