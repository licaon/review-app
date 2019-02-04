import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/images/logo.svg';
import 'pages/Home/Home.css';


const Home = () => {
    return (
        <ul>
            <li><Link to="/review/VdgWZZ___C">View review for Pizzeria Mamma Mia</Link></li>
        </ul>
    );
    
}

export default Home;