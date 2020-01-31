import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalHeader, ModalFooter, Form, FormGroup, Label, Input} from 'reactstrap';
import ProfileDelete from './ProfileDelete';


const ProfileEdit = (props) => {
    const [editQueenName, setEditQueenName]= useState(props.profile.queenName);
    const [editBirthName, setEditBirthName]= useState(props.profile.birthName);
    const [editHomeTown, setEditHomeTown]= useState(props.profile.homeTown);
    const [editCurrentTown, setEditCurrentTown]= useState(props.profile.currentTown);
    const [editAbout, setEditAbout]=useState(props.profile.about);
    const [editAccolades, setEditAccolades]=useState(props.profile.accolades);
    const [editUpcomingShows, setEditUpcomingShows]=useState(props.profile.upcomingShows);
    const [modal, setModal]= useState(false);
    const [deleteUp, setDeleteUp]= useState(false)

    const toggle = () => setModal(!modal);
    const deletemodal = () => setDeleteUp(!deleteUp);
    
    console.log(props.profile)

    

    const ProfileUpdate = (e) => {
        console.log('hitting the update!')
        e.preventDefault();
        fetch("http://localhost:3000/profile/myprofile" , {
            method: 'PUT',
            body: JSON.stringify({
                queenName: editQueenName, 
                birthName: editBirthName, 
                homeTown:editHomeTown, 
                currentTown: editCurrentTown, 
                about: editAbout, 
                accolades: editAccolades, 
                upcomingShows: editUpcomingShows
            }),
            headers: new Headers({
                'Content-Type':'application/json',
                'Authorization': props.token
            })
        }).then ((res) => {
            props.fetchUserProfile();
        }
        
            
            
        )
    }
    



    return(
        <>
        <Button onClick={toggle}>Edit</Button>
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Edit Profile</ModalHeader>
        <ModalBody>
            
        <Form onSubmit={(e) => ProfileUpdate(e)}>
            <FormGroup>
                <Label htmlFor="queenname">Chosen Name</Label>
                <Input value={editQueenName} name="queenname" onChange={(e)=> {console.log(e.target.value);setEditQueenName(e.target.value)}}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="birthname">Birth Name</Label>
                <Input name="birthname" value={editBirthName} onChange={(e)=> setEditBirthName(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="hometown">Hometown</Label>
                <Input name="hometown" value={editHomeTown} onChange={(e)=> setEditHomeTown(e.target.value)}/>
            </FormGroup>
                <Label htmlFor="currenttown">Current Town</Label>
                <Input name="currenttown" value={editCurrentTown} onChange={(e)=> setEditCurrentTown(e.target.value)}/>
            <FormGroup>
                <Label htmlFor="about">About</Label>
                <Input name="about" value={editAbout} onChange={(e)=> setEditAbout(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="accolades">Accolades</Label>
                <Input name="accolades" value={editAccolades} onChange={(e)=> setEditAccolades(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="upcomingshows">Upcoming Shows</Label>
                <Input name="upcomingshows" value={editUpcomingShows} onChange={(e)=> setEditUpcomingShows(e.target.value)}/>
            </FormGroup>
        <ModalFooter>
            {deleteUp ? <ProfileDelete profile={props.profile} token={props.token} fetchUserProfile={props.fetchUserProfile}/> : <></>}
        <Button color="danger" onClick={deletemodal}>DELETE</Button>
        <Button color="info" type="submit">Save</Button>
        <Button color="info" onClick={toggle}>Cancel</Button>
        </ModalFooter>
        </Form>
        </ModalBody>
        
        
        </Modal>
        </>
    )
}

export default ProfileEdit;