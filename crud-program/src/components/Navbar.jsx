import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import {Link} from 'react-router-dom'
import "../App.css"

function Filter_list() {

  function handleSearch(){
    
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link to="/" className='links'>All Users</Link></Nav.Link>
            <Nav.Link ><Link to="/create" className='links' >Create User</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link >
              <input type="text" onChange={handleSearch} placeholder='Search User' name="search" id="search" />
            </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default Filter_list;