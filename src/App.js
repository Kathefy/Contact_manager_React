import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Contact Manager" />
        <div className="container">
          <Contact name="John Doe" email="fff@gmail.com" phone="555-55" />
        </div>
      </div>
    );
  }
}
export default App;
