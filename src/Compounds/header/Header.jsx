import React from 'react'
import "./Header.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Figure from 'react-bootstrap/Figure';
// import Button from 'react-bootstrap/Button';



const Header = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-body-Primary" id='Navbar'  >
      <Container fluid>
      <Figure id='walmart_img' className='bar'>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg"
      />
    </Figure>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* Department list   */}
            <NavDropdown title="Department" id="navbarScrollingDropdown" className='bar' > 
              <NavDropdown.Item href="#action3" className='bar'>Deals</NavDropdown.Item>
              <NavDropdown.Item href="#action4" className='bar'>Grocery</NavDropdown.Item>
              <NavDropdown.Item href="#action4" className='bar'>Clothing, Shoes & Accessories</NavDropdown.Item>
              <NavDropdown.Item href="#action4" className='bar'>Pharmacy, Health & Wellness</NavDropdown.Item>
              <NavDropdown.Item href="#action4" className='bar'>Personal Care</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className='bar'>Home,Furniture & Appliances</NavDropdown.Item>
            </NavDropdown>

            {/* Service list   */}
            <NavDropdown title="Service" id="navbarScrollingDropdown" className='bar' > 
            
              <NavDropdown.Item href="#action3" className='bar'>Auto Care Center Service</NavDropdown.Item>
              <NavDropdown.Item href="#action4" className='bar'>Pharmacy</NavDropdown.Item>
              <NavDropdown.Item href="#action4" className='bar'>Health & Wellness</NavDropdown.Item>
              <NavDropdown.Item href="#action4" className='bar'>Photo Service</NavDropdown.Item>
              <NavDropdown.Item href="#action4" className='bar'>Money Service</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className='bar'>Ordering Online</NavDropdown.Item>
            </NavDropdown>


            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              className="bar"
            />
            <Button variant="warning" className='bar'>Search</Button>
          </Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header;