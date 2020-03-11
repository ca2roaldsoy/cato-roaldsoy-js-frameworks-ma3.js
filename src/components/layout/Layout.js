import React from "react";
import Home from '../home/Home.js';
import News from '../news/News.js';
import Login from '../login/Login.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";

function Layout () {
    
    return (
    
        <Router>
           
            <nav>
               <ul>
                    <li><NavLink to="/" exact> Home </NavLink></li>
                    <li><NavLink to="/news" > News </NavLink></li>
                    <li><NavLink to="/login" > Login </NavLink></li>
                </ul>
            </nav>
            
            <Switch>
               <Route path="/" exact component = { Home } />
               <Route path="/news" component = { News } />
               <Route path="/login" component = { Login } />    
            </Switch>
            
        </Router>
    )
};

export default Layout;
