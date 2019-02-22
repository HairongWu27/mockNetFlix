import {createStore} from 'redux';

const initialState = 
{

  'mylist' :
   [
        {
          'title': 'Futurama',
          'id': 1,
          'img': 'http://cdn1.nflximg.net/webp/7621/3787621.webp'
        },
        {
          'title': 'The Interview',
          'id': 2,
          'img': 'http://cdn1.nflximg.net/webp/1381/11971381.webp'
        },
        {
           'title': 'Gilmore Girls',
           'id': 3,
           'img': 'http://cdn1.nflximg.net/webp/7451/11317451.webp'
        }
    ],
  'recommendations' : 
    [
          {
            'title': 'Family Guy',
            'id': 4,
            'img': 'http://cdn5.nflximg.net/webp/5815/2515815.webp'
          },
          {
            'title': 'The Croods',
            'id': 5,
            'img': 'http://cdn3.nflximg.net/webp/2353/3862353.webp'
          },
          {
            'title': 'Friends',
            'id': 6,
            'img': 'http://cdn0.nflximg.net/webp/3200/9163200.webp'
          }
      ]
};

// actions
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

// reducer
const myReducer = (state = initialState, action) => {
    console.log(action.type);
    //console.log(action.item);
    switch (action.type) {
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

 
  const store = createStore(myReducer, initialState);
  export default store;  




 
 

