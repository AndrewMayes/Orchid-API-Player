import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Stage from './components/Stage/Stage';

/**
 * Main App component. Performs requests to the Orchid Core VMS API and renders the Stage component.
 */
const App = () => {

  const [sessionID, setSessionID] = useState('');
  const [streams, setStreams] = useState([]);
  
  useEffect(() => {
    const user = {
      "username": process.env.REACT_APP_USERNAME,
      "password": process.env.REACT_APP_PASSWORD,
      "expiresIn": 2591999,
      "cookie": "session"
    }

    // Performs Axios requests to create a new user session and get cameras
    const getFrames = () => {
      axios.post(`https://orchid.ipconfigure.com/service/sessions/user`, user)
      .then(res => {
        const userID = res.data.id;
        setSessionID(userID);
        axios.get(`https://orchid.ipconfigure.com/service/cameras?sid=${userID}`)
          .then(res => {
            const cameras = res.data.cameras;
            cameras.forEach(camera => {
              setStreams(streams => [...streams, {
                id: camera.primaryStream.id,
                name: camera.name
              }])
            })
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
    }

    getFrames();

  }, []);

  return (
    <div>
      <Stage data-testid="stage" streams={streams} sID={sessionID}/>
    </div>
  )
}

export default App;
