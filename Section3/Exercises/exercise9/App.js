// IMPORTANT: You CAN'T import & use useState like this in this Udemy environment
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState();



export default function App() {
    
    const [price,setPrice]=React.useState(100);
 
 
     const applyUpdate= () => {
        setPrice(75);
        
        
    };
return (
    
    
    
    
    <div>
        <p data-testid="price">${price}</p>
        <button onClick={applyUpdate}>Apply Discount</button>
    </div>
);
}
