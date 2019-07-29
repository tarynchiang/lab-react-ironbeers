import React, { Component } from 'react';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';
import './singlebeer.css';

function SingleBeer(props){
    console.log("props",props)
    const theID = props.match.params.id;
    
    const theActualBeer = props.allBeers.find((eachP)=>{
        return eachP._id === theID
    })
    
    if(props.ready){
        console.log('singleBeer',theActualBeer);
        return(
            <div className="whole-page">
                <Link to="/" className="homeLink">
                    <img src="/img/home.png"></img>
                </Link>
                <h1>Random Beer</h1>
                <div className="eachBox">
                    <img src={theActualBeer.image_url}></img>
                    <div>
                        <h1>{theActualBeer.name}</h1>
                        <span>{theActualBeer.attenuation_level}</span>
                        <p>{theActualBeer.tagline}</p>
                        <h5>{theActualBeer.first_brewed}</h5>
                        <p>{theActualBeer.description}</p>
                        <h4>{theActualBeer.contributed_by}</h4>
                    </div>
                </div>

            </div>
        )
    }else{
        return(
            <h3>Loading...</h3>
        )
    }


}

export default SingleBeer;