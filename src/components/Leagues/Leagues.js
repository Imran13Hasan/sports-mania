import React, { useEffect } from 'react';
import { useState } from 'react';
import './Leagues.css'
import Teams from '../Teams/Teams';

const Leagues = () => {
    const [leagues, setLeagues] = useState([]);


    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`)
            .then(res => res.json())
            .then(data => setLeagues(data.teams))
    }, [])

    return (
        <div className='main-container'>
            <div className='cover-field'>
                <h1>CLUB OF CHAMPIONS</h1>
            </div>
            <div className='team-container'>
                {
                    leagues.map(league => <Teams key={league.idTeam} league={league}></Teams>)
                }
            </div>
            <footer style={{ marginTop: '40px', color: 'white', textAlign: 'center' }}>
                <span style={{}}> <small>© All Rights Reserved by <a style={{ color: 'red' }} href="https://www.facebook.com/ImranHasan45" rel="noreferrer" target="_blank">IMRAN HASAN</a></small></span>
            </footer>
        </div>
    );
};

export default Leagues;