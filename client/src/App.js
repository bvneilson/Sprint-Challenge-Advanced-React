import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PlayerList from './components/PlayerList.js';
import Navbar from './components/Navbar.js';
const App = () => {

  const [playerData, setPlayerData] = useState();

  useEffect(() => {
    axios.get('http://localhost:5000/api/players').then(res => {
      console.log(res);
      setPlayerData(res.data)
    }).catch(err => {
      console.log(err);
    })
  });

  return (
    <div className="App">
      <Navbar />
      <div className="player-list">
        <PlayerList data={playerData} />
      </div>
    </div>
  );
}

export default App;
