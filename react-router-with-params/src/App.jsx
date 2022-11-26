import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import User from './pages/User';
import Users from './pages/Users';
import reactLogo from './assets/react.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './pages/NavBar';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
