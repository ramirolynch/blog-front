import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Login } from './Components/Login';
import { Post } from './Components/Post';

function App() {
  return (
    <div className="App">

      <Login></Login>
      <Post></Post>
    
    </div>
  );
}

export default App;
