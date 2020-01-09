import React from 'react';

import { IHomeProps } from "./IHomeProps";
import { IHomeState } from "./IHomeState";

import './Home.css';

import profilePicture from './images/profile_picture.jpg';

export default class Home extends React.Component<IHomeProps, IHomeState> {
    render() {
        return (
            <div id="home" className="container-fluid">
                <div className="row justify-content-center">
                    <img id="img-profile-picture" src={profilePicture} alt="Idjaz" />
                </div>
                <div className="row justify-content-center">
                    <h1 id="header-name">IDJAZ HOSSANEE</h1>
                </div>
                <div className="row justify-content-center">
                    <h6 id="header-title">WEBSITE IN PROGRESS, CONTENTS NOT FINALIZED</h6>
                </div>

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
                    <div className="row">
                        <div className="col-sm-4 personal-details-title"><i
                            className="fa fa-birthday-cake nav-bar-icon-right-padding"></i>DATE OF BIRTH</div>
                        <div className="col-sm-8">21/11/1997</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 personal-details-title"><i
                            className="fa fa-envelope nav-bar-icon-right-padding"></i>EMAIL ADDRESS</div>
                        <div className="col-sm-8">idjazhossanee@gmail.com</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 personal-details-title"><i
                            className="fa fa-globe-africa nav-bar-icon-right-padding"></i>COUNTRY</div>
                        <div className="col-sm-8">Mauritius</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 personal-details-title"><i
                            className="fa fa-language nav-bar-icon-right-padding"></i>LANGUAGE</div>
                        <div className="col-sm-8">English | French | Mauritian Creole</div>
                    </div>
                </div>
            </div>
        );
    }
}