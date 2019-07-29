import React, { Component } from 'react';
import './home.css';
import {Link} from 'react-router-dom';

function Home(){

    return(
        <div className="home-page">
            <div className="link-div">
            <Link to="/beers" className="link">
                <img src="/img/beers.png"></img>
                <h1>All Beers</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </Link>
            </div>

            <div className="link-div">
            <Link to="/random-beer" className="link">
                <img src="/img/random-beer.png"></img>
                <h1>Random Beer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </Link>
            </div>
            
            <div className="link-div">
            <Link to="/new-beer" className="link">
                <img src="/img/new-beer.png"></img>
                <h1>New Beer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </Link>
            </div>
        </div>
    )
}

export default Home;