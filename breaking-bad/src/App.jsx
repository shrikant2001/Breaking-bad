import "./App.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetch } from "./redux/dataSlice";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import Quotes from "./components/Quotes/Quotes";

function App() {
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(fetch());  
  };
  handleChange(); //download the data and store in redux once the homepage loads.

  return (
    <div className='App'>
      <Router>
      <Header></Header>

      <Routes>
        <Route exact path="/" element={<Home/>}>  </Route>
        <Route exact path="/Search" element={<Search/>}>  </Route>
        <Route exact path="/Quotes" element={<Quotes/>}>  </Route>
      </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
