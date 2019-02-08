import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from 'pages/Reviews/Reviews';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const match = {
        params: {
            firmId: "test"
        },
        isExact: true,
        path: "",
        url: ""
    }
    ReactDOM.render(<Reviews match={match} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
