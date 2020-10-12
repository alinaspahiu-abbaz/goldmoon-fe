import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, Container, NavDropdown, } from 'react-bootstrap'
import {logout} from '../actions/userActions'
import "./styles/Header.css"


const Header = () => {
    
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    
    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header>
           <Navbar bg="#fa4355"  expand="lg" collapseOnSelect>
               <Container fluid> 
                  <LinkContainer to="/">
                     <Navbar.Brand> GoldMoon </Navbar.Brand>
                  </LinkContainer>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <LinkContainer to="/">
                          <Nav.Link>Home</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/rooms">
                          <Nav.Link>Rooms</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/spa">
                          <Nav.Link>Spa</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/restaurant">
                          <Nav.Link>Restaurant</Nav.Link>
                      </LinkContainer>
                      {userInfo ? (
                        <NavDropdown title={userInfo.name} id='username' >
                            <LinkContainer to='/profile'>
                                <NavDropdown.Item>
                                    Profile
                                </NavDropdown.Item>
                            </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>
                                        Logout
                                </NavDropdown.Item>
                        </NavDropdown>
                      )
                      : <LinkContainer to="/login">
                           <Nav.Link href="/login">Login<i className="fas fa-user ml-1"></i></Nav.Link>
                        </LinkContainer>  }
                         
                    </Nav>
                  </Navbar.Collapse>
               </Container>
           </Navbar>
        </header>
    )
}
export default Header