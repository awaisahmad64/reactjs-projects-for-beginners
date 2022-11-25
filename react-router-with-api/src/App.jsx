import reactLogo from './assets/react.svg'
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Posts from './pages/Posts';
import './App.css'
import Post from './pages/post';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/posts" element={<Posts />}></Route>
      <Route path="/posts/:id" element={<Post />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
