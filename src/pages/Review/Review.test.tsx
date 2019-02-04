import React from 'react';
import ReactDOM from 'react-dom';
import Review from 'pages/Review/Review';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const match = {
      params: {
          firmId: 1
      }
  }
  ReactDOM.render(<Review match={match} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
