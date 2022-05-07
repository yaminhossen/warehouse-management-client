import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="warning" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Fruits Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-white' href="home#items">Items</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <Nav.Link className='text-white' as={Link} to="manageItem">Manage Item</Nav.Link>
                                    :
                                    <button className='border-0 bg-warning'></button>
                            }
                            {
                                user ?
                                    <Nav.Link className='text-white' as={Link} to="myItem">My Item</Nav.Link>
                                    :
                                    <button className='border-0 bg-warning'></button>
                            }
                            {
                                user ?
                                    <Nav.Link className='text-white' as={Link} to="addItem">Add Item</Nav.Link>
                                    :
                                    <button className='border-0 bg-warning'></button>
                            }
                            {
                                user ?
                                    <button className='btn btn-link text-decoration-none text-white' onClick={handleSignOut}>SignOut</button>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;