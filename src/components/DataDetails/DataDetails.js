import React from 'react';
import './DataDetails.css';
import female from '../../images/female.png';
import male from '../../images/male.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import found from '../../images/icons/found.png'
import flag from '../../images/icons/flag.png'
import gender from '../../images/icons/gender.png'
import football from '../../images/icons/football.png'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const DataDetails = (props) => {
    const { strAlternate, strTeamBadge, strTeamBanner, strCountry, strGender, strSport, intFormedYear, strStadiumDescription } = props.data;

    //Team photo change by gender;
    const changeGender = (strGender) => {
        if (strGender = "Male") {
            return <img src={male} alt="" />;
        } else {
            return <img src={female} alt="" />
        }
    }


    return (
        <div className='main-container'>
            <div style={{ display: 'flex' }}>
                <div className='banner'>
                    <img src={strTeamBanner} alt="" />
                    <div className='logo'>
                        <img src={strTeamBadge} alt="" />
                    </div>
                </div>

            </div>
            <div className='details-container container'>
                <div className='details-info'>
                    <h4>{strAlternate}</h4>
                    <div className='info'>
                        <p> <img src={found} alt="" /> Founded: {intFormedYear}</p>
                        <p> <img src={flag} alt="" /> Country: {strCountry}</p>
                        <p> <img src={gender} alt="" /> Gender: {strGender}</p>
                        <p> <img src={football} alt="" /> Sport Type: {strSport}</p>
                    </div>
                </div>
                <div className='img-container'>
                    {changeGender()}
                </div>
            </div>
            <div className="description container">
                <p>{strStadiumDescription}</p>
            </div>
            <footer className="social-icons">
                <a style={{ textDecoration: 'none', color: 'tomato' }} href='https://www.twitter.com' rel="noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a style={{ textDecoration: 'none', color: '#2962ff' }} href='https://www.facebook.com' rel="noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a style={{ textDecoration: 'none', color: 'red' }} href='https://www.youtube.com' rel="noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
            </footer>
        </div>
    );
};

export default DataDetails;