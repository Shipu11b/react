import React,{Component} from 'react';
import Decrement from './Decrement';
import './App.css';


class App extends Component {
  render() {
    return (
      <>
        <Decrement start={50} />      
      </>
    );
  }
}

export default App;