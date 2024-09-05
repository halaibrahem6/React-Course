import React from "react";

function App() {
    
  // Create a ref for the file input element
  const fileInputRef = React.useRef();

  // Event handler function to trigger the file input click
  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger the click event on the file input
  };
  
  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input data-testid="file-picker" type="file"  ref={fileInputRef}
        className="hidden-file-input" />
        <button onClick={handleButtonClick}>Pick Image</button>
      </p>
    </div>
  );
}

export default App;
