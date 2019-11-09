import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PlayerList from './components/PlayerList.js';

class App extends Component {
  state = {
    playerData: ''
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players').then(res => {
      console.log(res);
      this.setState({playerData: res.data})
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="App">
        <div className="player-list">
          <PlayerList data={this.state.playerData} />
        </div>
      </div>
    );
  }
}

export default App;
