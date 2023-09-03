import "./App.css";
import { Navbar } from './components/public/Navbar';   // Se importa asi con corchetes porque no es una classe es simplemente una const
import Main from "./components/public/Main";
import { Footer } from "./components/public/Footer";
import { Routes, Route } from ".react-router-dom";
// import { Component } from 'react';
import { Detail } from './components/public/Detail';
import { UserForm } from './components/public/UserForm';

function App() {
  return (
    <div>
      <Navbar/>
      {/* <Main /> */}
      
        <Routes>
        <Route exact path={"/"} element={Main}/>
        <Route exact path={"/details/:id"} element={Detail}/>
        <Route exact path={"/user-form"} element={UserForm}/>
        
        </Routes>
      
      <Footer />
      

    </div>
  );
}

export default App;
