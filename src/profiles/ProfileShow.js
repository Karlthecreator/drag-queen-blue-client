import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

const ProfileShow = (props)=> {
   console.log(props.profile);
   console.log('profileShow props', props.profile);


   
    return(
        <Card>
            <CardImg />
            <CardBody>
                <CardTitle>{props.profile.queenName}</CardTitle>
                <CardSubtitle>{props.profile.homeTown}</CardSubtitle>
                <CardSubtitle>{props.profile.currentTown}</CardSubtitle>
                <CardText>{props.profile.about}</CardText>
                <CardText>{props.profile.accolades}</CardText>
                <CardText>{props.profile.upcomingShows}</CardText>
                <Button>Tip Me!</Button>
            </CardBody>
        </Card>
    )
}

export default ProfileShow;