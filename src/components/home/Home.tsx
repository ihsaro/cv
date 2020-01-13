import React from 'react';

import { IHomeProps } from "./interfaces/IHomeProps";
import { IHomeState } from "./interfaces/IHomeState";

import PersonalDetailItem from "./PersonalDetailItem";

export default class Home extends React.Component<IHomeProps, IHomeState> {
    render() {
        return (
            <div id="home" className="container-fluid">
                <div id="logo-container-home" className="container">
                    <i className="fa fa-home"></i>
                </div>
                <div id="about-me" className="container shadow p-3 mb-5 bg-white rounded">
                    <h5 id="header-about-me">ABOUT ME</h5>
                    I am a professional software developer seeking out new challenges and opportunities to grow my career. I
                    am an open-source enthusiast who works with linux as my daily driver and I my motivation to work is to
                    make the world a place where technology ...
                </div>

                <div id="personal-details" className="container shadow p-3 mb-5 bg-white rounded">
                    <h5 id="header-personal-information">PERSONAL INFORMATION</h5>
                    <PersonalDetailItem jsonResource={require('./json/PersonalDetailItem.json')} />
                </div>
            </div>
        );
    }
}