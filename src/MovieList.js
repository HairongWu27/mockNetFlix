import React  from 'react';


function MovieList(props){
  //console.log(props.list);
  

  return (
    <div>
      <h2>{props.header}</h2>
      <div className="movies">
      {props.list.map( (x, idx) =>{
         return( 
         <div className="movieItem" key={x.id}>
           <img src={x.img }/>
           <div className="title">{x.title}</div>
           <button   onClick={()=>props.ClickHandler(x.id)} >{props.button}</button>
         </div>
         )
      })}
      </div>
    </div>
  )

}

export default MovieList;