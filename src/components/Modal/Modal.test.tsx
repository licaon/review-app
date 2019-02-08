import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'components/Modal/Modal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Modal />, div);
  ReactDOM.unmountComponentAtNode(div);
});
