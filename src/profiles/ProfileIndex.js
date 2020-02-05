import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap'
import ProfileCreate from './ProfileCreate';
import ProfileShow from './ProfileShow';
import ProfileEdit from './ProfileEdit';
import APIURL from '../helpers/environment';
import styled from 'styled-components';


const Font = styled.div`
    font-family: "Fugaz One", "cursive";
    
`


const ProfileIndex = (props) => {

    const [profile, setProfile] = useState();

    // const [updateActive, setUpdateActive]= useState(false);

    // const editUpdateProfile = (profile) => {
        
    //     console.log(profile);
    // }

    // const updateOn = () => {
    //     setUpdateActive(true);
    // }

    // const updateOff = () => {
    //     setUpdateActive(false);
    // }

    // const profileRows = () => {
    //     return profiles.map((profileInfo, index) => {
    //         return(
    //             <Card key={index} className="cardName">
    //                 <ProfileShow profileInfo={profileInfo}/>
    //             </Card>
    //         )
    //     })
    // }

   


    const fetchUserProfile = () => {
        console.log('Fetching authenticated user profile');
            console.log(props.token)
        fetch(`${APIURL}/profile/myprofile` , {
            method: 'GET',
            headers: new Headers({
                'Content-Type':'application/json',
                'Authorization': props.token
            })
        }).then((res)=> res.json())
        .then((logData)=> {
            // console.log(logData instanceof Array);
            // console.log(logData);
            // console.log(Object.keys(logData))
            setProfile(logData)
            
        })
    
    }

    useEffect(()=> {
              fetchUserProfile();
          }, [ ]);


    return(
        <Font>
        <Container className="background" >
            
            <Row>
                <Col md="3">
                     {(profile != undefined || profile != null) ? <ProfileEdit token={props.token} profile={profile} fetchUserProfile={fetchUserProfile}/> : null}
                </Col>
                <Col md="9">
                    {console.log(profile, typeof profile,)}
                    { 
                    (profile != undefined || profile != null) ? <ProfileShow profile={profile} token={props.token} fetchUserProfile={fetchUserProfile}/> : <ProfileCreate fetchUserProfile={fetchUserProfile} token={props.token}/>
                    }
                </Col>
            </Row>
        </Container>
        </Font>
    )
}

export default ProfileIndex;