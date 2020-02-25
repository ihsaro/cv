import React from 'react';

import './Introduction.css';

import profilePicture from './images/profile_picture.jpg';

export default class Introduction extends React.Component {
    render() {
        return (
            <div id="introduction" className="container-fluid">
                <div className="row justify-content-center">
                    <img id="img-profile-picture" src={profilePicture} alt="Idjaz" />
                </div>
                <div className="row justify-content-center">
                    <h1 id="header-name">IDJAZ HOSSANEE</h1>
                </div>
                <div className="row justify-content-center">
                    <em id="header-title">The wisest fool is the loudest</em>
                </div>
            </div>
        );
    }
}