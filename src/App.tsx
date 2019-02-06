import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import Home from 'pages/Home/Home';
import Review from 'pages/Review/Review';
import MyReview from 'pages/MyReview/MyReview';
import Error404 from 'pages/Error404/Error404';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/review/:firmId" component={Review} />
        <Route path="/myreview/:firmId" component={MyReview} />
        <Route component={Error404} />
      </Switch>
    </Layout>
  </Router>
);

export default App;