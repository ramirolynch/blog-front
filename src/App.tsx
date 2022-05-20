
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

import { Login } from './Components/Login';
import { Post } from './Components/Post';
import { RequireAuth } from './Components/RequireAuth';

function App() {
  return (
    <div className="App">


      <Routes>

  
        <Route path="login" element={<Login></Login>}></Route>
        <Route path='/' element={<RequireAuth><Post/></RequireAuth>}></Route>
  
      </Routes>
      
    
    </div>
  );
}

export default App;
