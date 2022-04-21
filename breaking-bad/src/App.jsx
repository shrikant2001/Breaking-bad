import "./App.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch, setState } from "./redux/dataSlice";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import NotFound from "./components/NotFound/NotFound";
import Quotes from "./components/Quotes/Quotes";

function App() {
  const [characters, setCharacters] = useState([]);
  const dispatch = useDispatch();
  
  const handleChange = () => {
    dispatch(fetch());
  };
  handleChange();

  return (
    <div className='App'>
      <Router>
      <Header></Header>

      <Routes>
        <Route exact path="/" element={<Home/>}>  </Route>
        <Route path="*" element={<NotFound/>} />
        <Route exact path="/Search" element={<Search/>}>  </Route>
        <Route exact path="/Quotes" element={<Quotes/>}>  </Route>
      </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
