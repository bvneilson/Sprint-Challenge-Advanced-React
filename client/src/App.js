import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {

  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players').then(res => {
      console.log(res);
      this.setState({userData: res.data})
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
