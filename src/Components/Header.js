import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <>
        <Navbar  variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://s3.amazonaws.com/thumbnails.venngage.com/template/50856174-6975-471b-b1b0-20fbd6e76781.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            PEPE'S RESTAURENT
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header