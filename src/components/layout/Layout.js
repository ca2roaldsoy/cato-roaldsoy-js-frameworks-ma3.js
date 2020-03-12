import React from "react";
import Home from '../home/Home.js';
import News from '../news/News.js';
import Login from '../login/Login.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";

function Layout () {
    
    return (
    
        <Router>
           
            <Navbar bg="dark" variant="dark" expand="lg" role="navigation">
              <Navbar.Brand href="#home">POKEMASTER</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                   <Nav as="ul" className="mr-auto">
                       
                            <li className="px-2"><NavLink to="/" exact> Home </NavLink></li>
                            <li className="px-2"><NavLink to="/news" > News </NavLink></li>
                            <li className="px-2"><NavLink to="/login" > Login </NavLink></li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
            <Container>
                <Switch>
                   <Route path="/" exact component = { Home } />
                   <Route path="/news" component = { News } />
                   <Route path="/login" component = { Login } />    
                </Switch>
            </Container>
            
        </Router>
    )
};

export default Layout;
