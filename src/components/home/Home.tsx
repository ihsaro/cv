import React from 'react';

import './Home.css';
import PersonalDetailItem from './PersonalDetailItem';

export default class Home extends React.Component {
    render() {
        return (
            <div id="home" className="row justify-content-center section-top-padding">
                <div className="col-md-12">
                    <div className="container icon-container">
                        <i className="fa fa-home"><u className="section-title">Home</u></i>
                    </div>
                    <div className="container p-3 content-box-container-width">
                        <h5 className="content-box-header">ABOUT ME</h5>
                        <p id="about-message">
                        I am a professional software developer seeking out new challenges and opportunities to grow my career. I
                        am an open-source enthusiast who works with linux as my daily driver and I my motivation to work is to
                        make the world a place where technology ...
                        </p>
                    </div>

                    <div className="container p-3 content-box-container-width">
                        <h5 className="content-box-header">PERSONAL DETAILS</h5>
                        <PersonalDetailItem resource={require('./json/PersonalDetailItem.json')} />
                    </div>
                </div>
            </div>
        );
    }

}