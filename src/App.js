import React, { Component } from 'react';
import './App.scss';
import NavBar from "./components/navbar/NavBar"
import SideBar from './components/sidebar/SideBar';
import Main from './components/main/Main';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="Content">
          <SideBar />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
