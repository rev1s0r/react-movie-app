import './App.css';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import {Routes, Route} from "react-router-dom"; 

function App() {

  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
      5314 https://www.youtube.com/watch?v=G6D9cBaLViA&t=1245s
    </main>    
  );
}

export default App;
