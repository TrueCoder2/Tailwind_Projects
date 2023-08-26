import React from "react";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import 'material-icons/iconfont/material-icons.css';
import Home from "./Components/Home";
import Error404 from "./Components/Error404";

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='*' element={<Error404/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
