import React from 'react';
import ReactDOM from 'react-dom';
import MyReview from 'components/MyReview/MyReview';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MyReview />, div);
    ReactDOM.unmountComponentAtNode(div);
});
