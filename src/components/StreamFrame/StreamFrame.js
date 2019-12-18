import React, { useState, useEffect } from 'react';

/**
 * Stream Frame Component. Displays camera name and still image from a stream
 */
const StreamFrame = ({ stream, sID }) => {
  const { id, name } = stream;
  const url = `https://orchid.ipconfigure.com/service/streams/${id}/frame?sid=${sID}&fallback=true`;
  const [refreshURL, setRefreshURL] = useState(url);
  
  // React hook which runs after initial render and after every update
  useEffect(() => {
    let cleanUp = true;
    
    // Changes React state every 5 seconds in order to perform a refresh of the still images
    const refreshFrames = () => {
      setInterval(() => {
        if (cleanUp) {
          setRefreshURL('');
          setRefreshURL(url); 
        }

      }, 5000);
    }
    refreshFrames();
    return () => cleanUp = false
  }, [])

  return (
    <div className="stream-frame" data-testid="stream-frame">
      <img data-testid="stream-src" src={refreshURL} alt={name}/>
      <p data-testid="stream-name">{name}</p>
    </div>
  )
}

export default StreamFrame
