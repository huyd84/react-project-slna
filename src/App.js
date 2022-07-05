import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Error from './pages/Error';
import Navbar from './components/Navbar';
import About from './pages/About';
import Footer from './components/Footer';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
