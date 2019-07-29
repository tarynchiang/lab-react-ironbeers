import React, { Component } from 'react';
import axios from 'axios';
import './randombeer.css';
import {Link} from 'react-router-dom';

class RandomBeer extends Component{
    constructor(props){
        super(props)
        this.state={
            RandomBeer:{},
            ready:false,
        }
    }

    getRandomBeer = ()=>{
        axios.get('https://sample-api-ih.herokuapp.com/random')
        .then((response)=>{
          console.log('Random Beer',response.data)
          this.setState({
            RandomBeer: response.data,
            ready:true,
          })
        })
        .catch((err)=>{
          console.log(err);
        })
      }
    
    componentDidMount(){
        this.getRandomBeer();
    }

    showRandomBeer=()=>{
        let clone = {...this.state.RandomBeer};
        return(
            <div className='eachBox'>
                <img src={clone.image_url}></img>
                <div>
                    <h1>{clone.name}</h1>
                    <span>{clone.attenuation_level}</span>
                    <p>{clone.tagline}</p>
                    <h5>{clone.first_brewed}</h5>
                    <p>{clone.description}</p>
                    <h3>Created By:<span>{clone.contributed_by}</span></h3>
                </div>
            </div>
        )
    }

    render(){
            if(this.state.ready){
                return(
                    <div className="whole-page">
                         <Link to="/" className="homeLink">
                            <img src="/img/home.png"></img>
                        </Link>
                        <h1>Random Beer</h1>
                        {this.showRandomBeer()}
                    </div>
                )
            }else{
                return(
                    <h3>Loading...</h3>
                )
            }
    }
}

export default RandomBeer;