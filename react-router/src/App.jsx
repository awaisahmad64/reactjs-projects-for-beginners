import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Notfound from './pages/Notfound';
import Contactus from './pages/Contactus';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Footer from './pages/footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact-us" element={<Contactus />}></Route>
          </Routes>
        </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
