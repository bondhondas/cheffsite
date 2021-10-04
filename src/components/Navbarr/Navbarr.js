import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbarr = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>Culinary Institute</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ">
                            <Stack direction="horizontal" gap={4}>
                                <NavLink
                                    to="/home"
                                    style={{ textDecoration: 'none', fontWeight: "bold" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"

                                    }}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/service"
                                    style={{ textDecoration: 'none', fontWeight: "bold" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    Service
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    style={{ textDecoration: 'none', fontWeight: "bold" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",

                                    }}
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    to="/empolyee"
                                    style={{ textDecoration: 'none', fontWeight: "bold" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    Empolyee
                                </NavLink>
                            </Stack>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Navbarr;