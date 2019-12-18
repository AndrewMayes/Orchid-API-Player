import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import StreamFrame from './StreamFrame';

afterEach(cleanup);

const defaultProps = {
  stream: {
    id: '1158',
    name: 'test'
  },
  sID: '1HtMM2eo3d1h63m'
}

const url = `https://orchid.ipconfigure.com/service/streams/${defaultProps.stream.id}/frame?sid=${defaultProps.sID}&fallback=true`;

it("renders without crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<StreamFrame stream={defaultProps.stream} sID={defaultProps.sID}/>, div);
})

it("renders stream frame correctly", () => {
  const { queryByTestId } = render(<StreamFrame stream={defaultProps.stream} sID={defaultProps.sID}/>);

  expect(queryByTestId('stream-src')).toBeTruthy();
  expect(queryByTestId('stream-name')).toBeTruthy();
})

it("renders correct stream frame name and image", () => {
  const { queryByTestId } = render(<StreamFrame stream={defaultProps.stream} sID={defaultProps.sID}/>);

  expect(queryByTestId('stream-name')).toHaveTextContent('test');
  expect(queryByTestId('stream-src').src).toBe(url);
})