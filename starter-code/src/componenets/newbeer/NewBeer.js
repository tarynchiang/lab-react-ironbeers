import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import "./newbeer.css";

class AddBeer extends Component {
  constructor(props){
      super(props);
      this.state = {
        newName: "", 
        newTagline: "",
        newDescription:"",
        newFirstBrewed:"",
        newBrewersTips:"",
        newAttenuationLevel: 0,
        newContributedBy:""
    };
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post("https://sample-api-ih.herokuapp.com/new", {
        name: this.state.newName,
        tagline:this.state.newTagline,
        description: this.state.newDescription,
        first_brewed:this.state.newFirstBrewed,
        brewers_tips:this.state.newBrewersTips,
        attenuation_level:this.state.newAttenuationLevel,
        contributed_by :this.state.newContributedBy
      }, {withCredentials: true })
    .then( () => {
        this.props.getData();
        // this function updates the list in ProjectIndex.js
        this.setState({
            newName: "", 
            newTagline: "",
            newDescription:"",
            newFirstBrewed:"",
            newBrewersTips:"",
            newAttenuationLevel: 0,
            newContributedBy:""
        },()=>{this.props.history.push('/beers')});
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  }

  render(){
    return(
      <div className="add-new">
        <Link to="/" className="homeLink">
            <img src="/img/home.png"></img>
        </Link>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="newName" value={this.state.newName} onChange={ e => this.handleChange(e)}/>
          <label>Tagline:</label>
          <input type="text" name="newTagline" value={this.state.newTagline} onChange={ e => this.handleChange(e)}/>
          <label>Description:</label>
          <input type="text" name="newDescription" value={this.state.newDescription} onChange={ e => this.handleChange(e)}/>
          <label>First_Brewed:</label>
          <input type="text" name="newFirstBrewed" value={this.state.newFirstBrewed} onChange={ e => this.handleChange(e)}/>
          <label>Brewers_Tips:</label>
          <input type="text" name="newBrewersTips" value={this.state.newBrewersTips} onChange={ e => this.handleChange(e)}/>
          <label>Attenuation_Level:</label>
          <input type="number" name="newAttenuationLevel" value={this.state.newAttenuationLevel} onChange={ e => this.handleChange(e)}/>
          <label>Contributed_By :</label>
          <textarea name="newContributedBy" value={this.state.newContributedBy} onChange={ e => this.handleChange(e)} />
          
          <input type="submit" value="Add new" />
        </form>
      </div>
    )
  }
}

export default AddBeer;