import React from 'react';
import ReactDOM from 'react-dom';
import Review from 'pages/MyReview/MyReview';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const match = {
      params: {
          firmId: "test"
      },
      isExact: true,
      path: "",
      url: "",
  };
  ReactDOM.render(<Review match={match} location={{search: ""}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
