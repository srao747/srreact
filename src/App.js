import React, { useState, useEffect } from "react";
import './App.css';
import MainPage from './MainPage';
import NavPage from './NavPage';
import Header from './Header';
import { Footer } from './Footer';
import { BrowserRouter } from "react-router-dom";





function App() {
  return (
    <div className="App">
      <div id="main">
        <div id="wrapper">
          <Header />
          <div className="container">
            <div className="row mt-5 mb-5">
              <div className="col-lg-9">
                <div id="text-static">
                  <BrowserRouter>
                    <MainPage />
                  </BrowserRouter>
                </div>
              </div>
              <div className="col-lg-3">
                <div id="text-json">
                  <NavPage />
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;



