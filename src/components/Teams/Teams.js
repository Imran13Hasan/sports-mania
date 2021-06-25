import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Team.css'

const Teams = (props) => {
    const { idTeam, strTeamBadge, strAlternate, strSport } = props.league;
    const history = useHistory();

    
    const handleExplore = (idTeam) => {
        const url = `team/${idTeam}`
        history.push(url)
    }

    return (
        <div style={{ padding: '20px' }}>
            <Card style={{ width: '23rem', height: '25rem', alignItems: 'center', textAlign: 'center', padding: '20px', justifyContent: 'center' }}>
                <Card.Img className='image' variant="top" src={strTeamBadge} />
                <Card.Body>
                    <Card.Title><b>{strAlternate}</b></Card.Title>
                    <Card.Text>Sports Type: {strSport}</Card.Text>
                    <Button onClick={() => handleExplore(idTeam)} variant="primary">Explore</Button>
                </Card.Body>
            </Card>
        </div>
    );
};


export default Teams;