import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './navigation/Navigation';
import Home from './navigation/pages/Home';
import Blog from './navigation/pages/Blog';
import Details from './components/Details';

function App() {
  return (
    <div className='app'>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
