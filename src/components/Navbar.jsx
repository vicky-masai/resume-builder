import React from "react";
import { Navbar, Container } from "react-bootstrap";
const Header = () => {
  return (
    <>
      <Navbar
        expand="lg"
        style={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          backgroundColor: "#6F00FF",
          color: "white"
        }}
      >
        <Container>
          <Navbar.Brand href="/" style={{color:"white",fontWeight:"200"}}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/6231/6231072.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            /> RB
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/build-resume"
                  style={{ color: "white",}}
                >
                  Build Resume
                </a>
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
