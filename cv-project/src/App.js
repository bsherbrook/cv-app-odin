import './App.css';
import React, { Component } from 'react';
import FormHead from './components/FormHead';
import FormMiddle from './components/FormMiddle';
import FormEnd from './components/FormEnd';
import FormSkills from './components/FormSkills';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FormHead />
        <FormSkills />
        <FormMiddle />
        <FormEnd />
      </div>
    );
  }
}

export default App;
