import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import Stage from './Stage';

afterEach(cleanup);

const defaultProps = {
  streams: [{},{},{}],
  sID: ''
}

it("renders without crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<Stage streams={defaultProps.streams} sID={defaultProps.sID}/>, div);
});

it("renders three <StreamFrame/> components", () => {
  const { getAllByTestId } = render(<Stage streams={defaultProps.streams} sID={defaultProps.sID}/>)
  expect(getAllByTestId('stream-frame').length).toBe(3);
})