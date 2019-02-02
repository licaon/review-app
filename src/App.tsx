import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';

const App = () => (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
      </div>
    </Router>
);

export default App;