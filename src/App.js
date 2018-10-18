import React, { Component } from 'react';
import './App.css';
import TimerHeader from './components/TimerHeader/TimerHeader';
import TimerDisplay from "./components/TimerDisplay/TimerDisplay";
import TimerButton from "./components/TimerButton/TimerButtomn";
import TimerConfig from "./components/TimerConfig/TimerConfig";

class App extends Component {
  render() {
    return (
      <div className="panel panel-default app-content center-block">
          <div className="panel-body">
              <TimerHeader/>
              <TimerDisplay/>
              <TimerButton/>
              <TimerConfig/>
          </div>
      </div>
    );
  }
}

export default App;
