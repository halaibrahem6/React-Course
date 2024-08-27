import React from 'react';
import './index.css'; 

function Card(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2> 
      
      <div className="card-content">
        {props.children} 
        
      </div>
    </div>
  );
}

export default Card;
