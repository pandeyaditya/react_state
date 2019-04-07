import React, { Component } from 'react';
import Users from './users/Users';
import logo from './logo.svg';
import './App.css';


function SayAdi(){
  return(<h1>HI Adi</h1>);
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Users title="My React Example"></Users>
      </div>
    );
  }
}

export default App;
