import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/home-page/home-page.component';
import ContactsPage from './pages/contacts/contacts.component';
import './App.css';

class App extends React.Component {
  render(){   
  return (
    <div className="App">
    <Header />
    <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/contacts' component={ContactsPage} />
    </Switch>
    </div>
  );
}
}

export default App;
