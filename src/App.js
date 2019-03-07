import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import {moveListToRecommendation, moveRecommendationToList} from './store.js'
import MovieList from './MovieList.js'
import List from './List'
import {getMovie} from './store'


const url="http://localhost:8000/";




class App extends Component {
 
  componentDidMount(){
    this.props.fetchMovie(url);
  
  }
  

  render() {

      return (
        <div className="app">
          <img className="logo" src={require('./images/netflixlogo.png')} alt="netflix" />
           <MovieList header={"Movie List"} list={this.props.list} 
          ClickHandler={this.props.moveListToRem} button={"remove"}/>
         
          <MovieList header={"Recommendations"} list={this.props.recommendation} 
          ClickHandler={this.props.moveRemToList}  button={"add"}/>
          <List header={"My List"} list={this.props.list}/> 
          
        </div>
      )
  }
}

 





const mapStateToProps = state => {
    return {
        list: state.mylist,
        recommendation: state.recommendations,
    }
};
  
function mapDispatchToProps(dispatch) {
      return({
        moveListToRem: (item) => {dispatch(moveListToRecommendation(item))},
        moveRemToList: (item) => {dispatch(moveRecommendationToList(item))},
        fetchMovie:    (url)  => {dispatch(getMovie(url))},
      })
};
  

export default connect(mapStateToProps, mapDispatchToProps)(App);


  