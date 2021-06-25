import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DataDetails from '../DataDetails/DataDetails';
import './TeamDetails.css'

const TeamDetails = () => {
    const [teamData, setTeamData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamData(data.teams))
    }, [id])

    return (
        <div>
            {
                teamData.map(data => <DataDetails key={data.idTeam} data={data}></DataDetails>)
            }
        </div>
    );
};

export default TeamDetails;