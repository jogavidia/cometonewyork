import React, { Component } from 'react';
import Header from './components/header-footer/Header';
import Burger from './resources/logos-icons/hamburger-icon.svg'

import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';

import Home from './components/pages/Home';
import Places from './components/pages/Places';
import Trains from './components/pages/Trains';

export default class NavComponent extends Component {
  render() {

    function BurgerToggle() {
      let linksEl = document.querySelector('.narrowLinks');
      if (linksEl.style.display === 'block') {
                linksEl.style.display = 'none';
            } else {
                linksEl.style.display = 'block';
            }
    }

    return (
        <HashRouter>
            
        <div className="header">
          <NavLink exact to="/"><Header /></NavLink>
        </div>

        <div className="nav-container">

          <div className="navWide">
            <div className="home-logo">
              <NavLink exact to="/"><Header /></NavLink>
            </div>
            <div className="menu-wide">
              <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/places">Places</NavLink></li>
                <li><NavLink to="/trains">Trains</NavLink></li>
              </ul>
            </div>
          </div>

          <div className="navNarrow">
            <div className="hamburger" onClick={BurgerToggle}>
              <img src={Burger} alt="menu" height="25px" />
            </div>
            
            <div className="narrowLinks">
            <ul>
              <li onClick={BurgerToggle} ><NavLink exact to="/">Home</NavLink></li>
              <li onClick={BurgerToggle} ><NavLink to="/places">Places</NavLink></li>
              <li onClick={BurgerToggle} ><NavLink to="/trains">Trains</NavLink></li>
              </ul>
            </div>
          </div>


       </div>
      
      <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/places" component={Places}/>
              <Route path="/trains" component={Trains}/>        
      </div>
    
      </HashRouter>
        
    )
  }
}
