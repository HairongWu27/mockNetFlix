import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import {moveListToRecommendation, moveRecommendationToList} from './store.js'
import MovieList from './MovieList.js'
import List from './List'


class App extends Component {

    render() {
        return (
          <div className="app">
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
      })
};
  

export default connect(mapStateToProps, mapDispatchToProps)(App);


  