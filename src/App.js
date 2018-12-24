import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Board from './Components/Board/Board'
import Game from'./Components/Game/Game'
class App extends Component {
  render() {
    return (
      <div >
      <Game/>
      </div>
    );
  }
}

export default App;
