import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from './component/Nav';
import Todo from './component/todoCode/Todo';
import Cards from './component/FilterCardCode/Cards';
import "./component/todoCode/Todo.css";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav/>
      <Routes>
        <Route path='/' element={<div>
          <h1>Click Next Page..</h1>
          <img src="https://cdn.pixabay.com/photo/2018/04/20/10/08/website-3335622__340.png"/>
          </div>}/>
        <Route path='/todo' element={<Todo/>}/>
        <Route path='/cards' element={<Cards/>}/>
        <Route path='/about' element={<div><h1>About Page</h1></div>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
