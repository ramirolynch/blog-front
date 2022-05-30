import { useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../Context/BlogContext";

export function Navigation() {

  let { logoutUser, authenticated } = useContext(BlogContext);
  const navigate = useNavigate();


  function handleClick (){

    logoutUser();
    localStorage.removeItem('userLogin');
    navigate('/');  
      
  }
    
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container style={{paddingLeft:"1em", marginLeft:0}}>
        <Navbar.Brand href="/">Java Notes</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {authenticated && <Nav.Link href="post">Post</Nav.Link>}
            {!authenticated && <Nav.Link href="login">Login</Nav.Link>}
            <Nav.Link href="signup">Sign Up</Nav.Link>
            {authenticated && <Nav.Link onClick={handleClick} href="signup">Log Out</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}