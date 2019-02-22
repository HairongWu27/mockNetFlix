import React  from 'react';

function List(props){
  return (
    <div>
      <h3>{props.header}</h3>
      {props.list.map( (x) =>{
         return( 
           <li key={x.id}>{x.title}</li> 
         )
      })}
    </div>
  )
}

export default List;