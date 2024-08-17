import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <>
            
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand as={NavLink} to="/">ReBookStore</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/catalog">Catalog</Nav.Link>
                <Nav.Link as={NavLink} to="/about">About</Nav.Link>
              </Nav>
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/book-create">Create Book</Nav.Link>
                <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                <Nav.Link as={NavLink} to="/logout">Logout</Nav.Link>
                <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          
        </>
    );
}