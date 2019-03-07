import {createStore, applyMiddleware} from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

const initialState = {
  mylist: [],
  recommendations:[],
  hasErrored: false,
  isLoading: false
};


export function getMovie(url ){ 
  return (dispatch)=>{
      dispatch(requestStart());
      console.log(url);
      axios.get(url)
      .then((res)=>{
              dispatch(requestComplete(res.data));    
      }) 
      .catch((err)=>{
          console.log(err);
          dispatch(requestError());
      })
  }
}


export const moveListToRecommendation = id=> {
  return {
    type: 'MOVELIST_TO_RECOMMENDATION',
    id,
  };
}

export const moveRecommendationToList = id =>{
  return{
    type: 'MOVERECOMMENDATION_TO_LIST',
    id,
  }
}
function requestComplete(newitems) {
  return {
    type: 'MOVIES_COMPLETE',
    items: newitems,
  };
}

function requestError() {
  return {
    type: 'MOVIE_HAS_ERRORED',
  };
}

function requestStart() {
  return {
    type: 'MOVIE_IS_LOADING',
  };
}



// reducer
const myReducer = (state = initialState, action) => {
    console.log(action.type);
    console.log(action.items);
    switch (action.type) {
      case 'MOVIE_HAS_ERRORED':
        return {...state, hasErrored: true, isLoading: false};
      case 'MOVIE_IS_LOADING':
        return {...state, hasErrored: false, isLoading: true};
      case 'MOVIES_COMPLETE':
        return {mylist: action.items.mylist, 
                recommendations:action.items.recommendations ,
                hasErrored: false, isLoading: false}; 
      case 'MOVERECOMMENDATION_TO_LIST':
        let itemA = state.recommendations.filter(x =>x.id===action.id);
        let listA = state.recommendations.filter(x => x.id !== action.id);
        return { mylist:[...state.mylist, itemA[0]], recommendations:listA };
      case 'MOVELIST_TO_RECOMMENDATION':
         let itemB = state.mylist.filter(x =>x.id === action.id);
         let listB = state.mylist.filter(x =>x.id !== action.id);
        return { mylist:listB, recommendations:[...state.recommendations, itemB[0]]};
      default:
        return state;
    }
  };

  
 
  const store = createStore(myReducer, initialState,  applyMiddleware(thunk));
  export default store;  




 
 

