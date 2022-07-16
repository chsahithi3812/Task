import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavvBarr() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >USERS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/all">ALL USER</Nav.Link>
            <Nav.Link href="/add">ADD USER</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      

      
    </>
  );
}

export default NavvBarr;