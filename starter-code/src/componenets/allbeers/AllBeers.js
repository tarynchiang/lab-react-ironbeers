
import React, { Component } from 'react';
// import './allbeers.css';
import {Link} from 'react-router-dom';

class AllBeers extends Component{
    


    showAllBeers=()=>{
        return this.props.allBeers.map((eachBeer)=>{
            return(
                <Link to={"/beers/"+eachBeer._id} className="eachLink">
                    <div className='eachBox'>
                        <img src={eachBeer.image_url}></img>
                        <div>
                            <h1>{eachBeer.name}</h1>
                            <p>{eachBeer.description}</p>
                            <h3>Created By:<span>{eachBeer.contributed_by}</span></h3>
                        </div>
                    </div>
                </Link>
            )
        })
    }

    render(){
            if(this.props.ready){
                return(

                    <div className="whole-page">
                        <Link to="/" className="homeLink">
                            <img src="/img/home.png"></img>
                        </Link>
                        <h1>All Beers</h1>
                        <Link to="/new-beer" className="add-new">
                           add the new beer
                        </Link>
                        {this.showAllBeers()}
                    </div>
                )
            }else{
                return(
                    <h3>Loading...</h3>
                )
            }
    }
}

export default AllBeers;