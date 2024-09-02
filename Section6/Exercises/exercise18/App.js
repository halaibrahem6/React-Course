import React, { useState } from 'react'; 

function App() { 

const [cssClass, setCssClass] = React.useState(''); // Event handler functions 
const handleYesButton = () => { setCssClass('highlight-green'); }; 
const handleNoButton = () => { setCssClass('highlight-red'); }; 

return ( 
<div id="app"> 
    <h1 className={cssClass}>CSS is great!</h1> 
<menu> <li> <button onClick={handleYesButton}>Yes</button> </li>
 <li> <button onClick={handleNoButton}>No</button> </li>
  </menu> </div> ); } 
  
  export default App;