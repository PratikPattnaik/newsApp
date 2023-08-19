import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<News key="home" pageSize={5}/>}/>
          <Route exact path='/business' element={<News key="business" pageSize={5} category="business"/>}/>
          <Route exact path='/health' element={<News key="health" pageSize={5} category="health"/>}/>
          <Route exact path='/science' element={<News key="science" pageSize={5} category="science"/>}/>
          <Route exact path='/sports' element={<News key="sports" pageSize={5} category="sports"/>}/>
          <Route exact path='/technology' element={<News key="technology" pageSize={5} category="technology"/>}/>
        </Routes>
      </div>
      </BrowserRouter>
      
    )
  }
}
