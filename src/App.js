import React, {useEffect, useState} from 'react';
import Sitebar from './home/Navbar';
import Auth from './auth/Auth';
import ProfileIndex from './profiles/ProfileIndex';
// import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  const[sessionToken, setSessionToken]= useState('');
  

  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'))
    }
  },[])

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
    return(sessionToken === localStorage.getItem('token') ? <ProfileIndex token={sessionToken}/> : <Auth updateToken={updateToken}/>)
  }

//   const fetchProfiles = () => {
//     // console.log('fetchprofiles is running')
//     fetch('http://localhost:3000/profile', {
//         method: 'GET',
//         headers: new Headers ({
//             'Content-Type':'application/json',
//             })
//     }).then((res)=> res.json())
//     .then((logData)=> {
//         console.log(logData);
//         setProfile(logData);
//     })
// }

  return (
    <div>
      
      
      <Sitebar clickLogout={clearToken}/>
      <br/>
      {/* {fetchProfiles()} */}
      {protectedViews()}
     
      
    </div>
  );
}

export default App;
