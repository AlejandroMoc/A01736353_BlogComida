import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Link to="/">Inicio</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/blog">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
