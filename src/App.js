import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {PrimaryButton, SecondaryButton} from './components/buttonComponent/buttons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PrimaryButton color={'#fff'} name={'Use Me'}/>
        <SecondaryButton color={'#333'}/>
      </div>
    );
  }
}

export default App;
