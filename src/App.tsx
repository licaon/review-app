import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

import Layout from 'components/Layout/Layout';
// import Home from 'pages/Home/Home';
import Reviews from 'pages/Reviews/Reviews';
import MyReview from 'pages/MyReview/MyReview';
import Error404 from 'pages/Error404/Error404';

library.add(faUserCircle, farStar, fasStar);

const App = (): React.ReactElement<{}> => (
    <Router>
        <Layout>
            <Switch>
                <Redirect exact from="/" to="/review/dummy_firm" />
                <Route path="/review/:firmId" component={Reviews} />
                <Route path="/myreview/:firmId" component={MyReview} />
                <Route component={Error404} />
            </Switch>
        </Layout>
    </Router>
);

export default App;