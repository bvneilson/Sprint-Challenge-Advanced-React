import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PlayerList from './components/PlayerList.js';
import { greeting } from './newtests.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlayerList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('greets', () => {
  expect(greeting('Brennan')).toEqual('Hello, Brennan.');
  expect(greeting('Navid')).toEqual('Hello, Navid.');
});
