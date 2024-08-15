import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <>
            {/* <div className="header">
                <h1>ReStore</h1>

                <nav className="main-menu">
                    <NavLink to="/" style={({isActive}) => isActive ? {color:'red'} : {}}>Home</NavLink>
                    <NavLink to="/catalog" style={({isActive}) => isActive ? {color:'red'} : {}}>Catalog</NavLink>
                    <NavLink to="/contact" style={({isActive}) => isActive ? {color:'red'} : {}}>About</NavLink>
                </nav>

                <nav className="login">
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                </nav>
            </div> */}
            



      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">ReStore</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/catalog">Catalog</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
            <Nav.Link as={NavLink} to="/logout">Logout</Nav.Link>
            <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


        </>
    );
}