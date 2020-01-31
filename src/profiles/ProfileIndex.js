import React, {useState} from 'react';
import {Container, Row, Col} from 'reactstrap'
import ProfileCreate from './ProfileCreate';
import ProfileShow from './ProfileShow';
import ProfileEdit from './ProfileEdit';
import APIURL from '../helpers/environment'


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

    // useEffect(()=> {
    //     fetchUserProfile();
    // }, [ ]);


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

        // const myProfile = () => {
        //     if()
        // }

    
    }

   


    return(
        <Container>
            <Row>
                <Col md="3">
                     {profile !== undefined ? <ProfileEdit token={props.token} profile={profile} fetchUserProfile={fetchUserProfile}/> : null}
                </Col>
                <Col md="9">
                    {console.log(profile)}
                    { 
                    profile !== undefined ? <ProfileShow profile={profile} token={props.token} fetchUserProfile={fetchUserProfile}/> : <ProfileCreate fetchUserProfile={fetchUserProfile} token={props.token}/>
                    }
                </Col>
            </Row>
        </Container>
        
    )
}

export default ProfileIndex;