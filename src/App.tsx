
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

import { Login } from './Components/Login';
import { Post } from './Components/Post';
import { RequireAuth } from './Components/RequireAuth';
import { PostList } from './Components/PostList';
import { SinglePost } from './Components/SinglePost';
import { Navigation } from './Components/Navigation';


function App() {

  return (
    <div className="App">
      <Navigation></Navigation>


      <Routes>

  
        <Route path="login" element={<Login></Login>}></Route>
        <Route path='/' element={<PostList />}></Route>
      
        <Route path="/posts/:id" element={<SinglePost/>}></Route>
  
      </Routes>
      
    
    </div>
  );
}

export default App;
