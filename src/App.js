import React, {Component} from 'react';
import { HashrRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';


import {Provider} from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render(){
    return(
// Чтоб подключить провайдер ( context.js) надо обернуть все в <Provider>
      <Provider> 
        <Router>
          <div className="app">
            <Header />
            <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts}/>
              <Route exact path="/contact/add" component={AddContact}/>
              <Route exact path="/contact/edit/:id" component={EditContact}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/test" component={Test}/>
              <Route component={NotFound}/>
            </Switch>
              
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;