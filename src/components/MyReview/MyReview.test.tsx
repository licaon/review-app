import React from 'react';
import ReactDOM from 'react-dom';
import MyReview from 'components/MyReview/MyReview';
import { BrowserRouter as Router } from 'react-router-dom'; 

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><MyReview /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
});
