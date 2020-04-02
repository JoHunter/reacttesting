import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  foo = () => 'mii';

  render() {
    const name = "alda";
    const foo = () => 'soap';
    const loading = false;
    const showName = false;
    /**ternary */
    return (
      <div className="App">
        <h4>Hallo {showName && name}</h4>
        {loading ? <h4>Loading...</h4> : < h1 > Hallo {this.foo()}</h1 >}
        <Navbar />
      </div>)
    /* if (loading) {
       return <h4>Loading...</h4>;
     }
     else {
       return (
         <div className="App">
           <h1>Hallo from {this.foo()}</h1>
         </div>
       );
     }*/

  }
}

export default App;
