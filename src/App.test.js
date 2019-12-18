import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils';

afterEach(cleanup);

const defaultProps = {
  stream: {
    id: '1158',
    name: 'test'
  },
  sID: '1HtMM2eo3d1h63m'
}

it("renders without crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
})

it("renders stage correctly", async () => {
  await act(async () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
  });
})