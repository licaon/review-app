import React from 'react';
import ReactDOM from 'react-dom';
import Review from 'components/Review/Review';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Review reviewComment={'content'} reviewScore={2} reviewTime={0}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
