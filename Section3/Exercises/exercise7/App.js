import React, { useState } from 'react';

export const user = {
  email: '',
  password: '',
  loggedIn: false,
};

function App() {
 
  const [currentUser, setCurrentUser] = useState(user);


  const loginHandler = () => {
    setCurrentUser({
      email: 'testemail@example.com',  
      password: 'securepassword',       
      loggedIn: true
    });
    console.log('User logged in:', currentUser);
  };

  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Email</label>
        <input type="email" />
      </p>

      <p>
        <label>Password</label>
        <input type="password" />
      </p>

      <p id="actions">
        <button onClick={loginHandler}>Login</button>
      </p>

     
      {currentUser.loggedIn && (
        <p>
          Logged in as: {currentUser.email}
        </p>
      )}
    </div>
  );
}

export default App;
