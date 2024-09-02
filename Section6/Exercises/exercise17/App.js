
import React from 'react';

function App() {
    const [titleColor,setTitleColor] = React.useState('white'); 

function handleClick(selectedOne){
    setTitleColor((prevColor)=> {
    if(selectedOne === 'Yes')
    return 'green'
    else 
    return 'red'
    });
}

    return (
    <div id="app">
      <h1 
      style={
          {
              color: titleColor
          }
      }
      >CSS is great!</h1>
      <menu>
        <li>
          <button onClick={()=>handleClick('Yes')} >Yes</button>
        </li>
        <li>
          <button onClick={()=>handleClick('No')}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;