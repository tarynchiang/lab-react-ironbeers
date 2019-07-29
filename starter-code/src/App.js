import React from 'react';
import './App.css';
import axios from 'axios';
import {Route, Link, Switch} from 'react-router-dom';
import Home from "./componenets/home/Home.js";
import AllBeers from "./componenets/allbeers/AllBeers.js";
import RandomBeer from "./componenets/randombeer/RandomBeer.js";
import SingleBeer from './componenets/singlebeer/SingleBeer.js';
import NewBeer from "./componenets/newbeer/NewBeer.js";


class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
        listOfBeers:[],
        ready:false,
    }
  }

  getAllBeers = ()=>{
    axios.get('https://sample-api-ih.herokuapp.com')
    .then((response)=>{
      console.log('all Beers',response.data)
      this.setState({
        listOfBeers: response.data,
        ready:true,
      })
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  componentDidMount(){
    this.getAllBeers();
  }

  
  render(){
    return (
      
      <div>
        <Switch>
          <Route exact path="/"render={()=><Home />}/>
          <Route exact path="/beers" render={(props)=><AllBeers 
          {...props}
            allBeers = {this.state.listOfBeers}
            ready = {this.state.ready}
          />}/>
          <Route exact path="/random-beer" render={()=><RandomBeer />}/>
          <Route exact path="/new-beer" render={(props)=><NewBeer 
          {...props} 
          getData = {this.getAllBeers}
          />}/>
          
          <Route exact path="/beers/:id" render={(props)=><SingleBeer
            {...props} 
            allBeers = {this.state.listOfBeers}
            ready = {this.state.ready}
          />}/> 
        </Switch>
      </div>
    );

  }
}

export default App;
