import React from 'react';
import StreamFrame from '../StreamFrame/StreamFrame';
import uuid from 'uuid';

/**
 * Stage Component. Container that holds all Stream Frames
 */
const Stage = ({ streams, sID }) => {
  return (
    <div className="flex-container">
      {streams.map(stream => <StreamFrame data-testid="stream-frame" stream={stream} sID={sID} key={uuid.v4()}/>)} 
    </div>
  )
}

export default Stage
