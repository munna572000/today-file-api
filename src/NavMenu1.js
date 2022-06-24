import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import './App.css'


function NavMenu1() {
 

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className="text-decoration-none text-primary">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" className="text-decoration-none text-primary">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact" className="text-decoration-none text-primary">
                
              Contact
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/SinglePage/:fname" className="text-decoration-none text-primary">
              SinglePage
                
              </Link>
            </Nav.Link>
           
           
              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu1;
