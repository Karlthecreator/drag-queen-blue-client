import React, { useEffect, useState } from 'react';
import Sitebar from './home/Navbar';
import Auth from './auth/Auth';
import ProfileIndex from './profiles/ProfileIndex';
// import {BrowserRouter as Router} from 'react-router-dom';
import APIURL from './helpers/environment'
import ProfileShow from './profiles/ProfileShow';

import './App.css'
import { checkPropTypes } from 'prop-types';




function App() {
  const [sessionToken, setSessionToken] = useState('');
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'))
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear()
    setSessionToken('');
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <ProfileIndex token={sessionToken} /> : <Auth updateToken={updateToken} />)
  }

  const fetchProfiles = () => {
    // console.log('fetchprofiles is running')
    fetch(`${APIURL}/profile/`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
      })
    }).then((res) => res.json())
      .then((logData) => {
        console.log(logData);
        setProfile(logData);
        // const show = () => {
        //   return logData.map((profileInfo, index) => {
        //     return (
        //       <Card key={index} className="cardName">
        //         <ProfileShow profileProfile={profileInfo} />
        //       </Card>
        //     )
        //   })
        // }
        // show()
      })
  }
  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <div>


      <Sitebar clickLogout={clearToken} />
      <br />
      {/* {fetchProfiles()} */}
      <br />
      {protectedViews()}
      <br />
      
      {profile.map((data, index) =>
        <ProfileShow key={index} profile={data}/>
      )} : null 


    </div>
  );
}

export default App;
