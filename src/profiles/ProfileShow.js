import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import styled from 'styled-components';
// import PaymentForm from "./PaymentForm";



const Font = styled.div`
    font-family: "Fugaz One", "cursive";
    
`

const ProfileShow = (props) => {
    console.log(props);
    //    console.log('profileShow props', props.profile);


    const Name = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
        `;




    return (
        <Card>
            <Font>
                <CardImg />
                <CardBody>
                    <Name><CardTitle>{props.profile.queenName}</CardTitle></Name>
                    <CardText> BIRTHNAME:  {props.profile.birthName}</CardText>
                    <img src={props.profile.image} width="150px" height="200px" alt="Headshot" align="right" />
                    <CardSubtitle>BIRTHPLACE:   {props.profile.homeTown}</CardSubtitle>
                    <CardSubtitle>CURRENT TOWN:  {props.profile.currentTown}</CardSubtitle>
                    <CardText>ABOUT:  {props.profile.about}</CardText>
                    <CardText>AWARDS:  {props.profile.accolades}</CardText>
                    <CardText> UPCOMING SHOWS:  {props.profile.upcomingShows}</CardText>
                    <Button>Tip Me!</Button>
                </CardBody>
            </Font>
        </Card>

    )
}

export default ProfileShow;