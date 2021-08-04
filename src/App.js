import React,{ useEffect } from 'react';
import './styles/App.css';
import Home from './Home';
import Footer from './Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import PropertyBook from './PropertyBook';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/property/:propId">
            <PropertyBook />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
