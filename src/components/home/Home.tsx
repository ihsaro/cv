import React from 'react';

import TitleBox from '../shared/TitleBox/TitleBox';
import PersonalDetailItem from './PersonalDetailItem';

import '../shared/All.css';

export default class Home extends React.Component {
    render() {
        return (
            <div className="row section-top-padding">
                <TitleBox title="Home" fontAwesomeIcon="fa fa-home fa-5x" />
                <div className="col-md-10">
                    <div className="container shadow p-3 mb-5 bg-white rounded content-box-container-width">
                        <h5 className="content-box-header">ABOUT ME</h5>
                        I am a professional software developer seeking out new challenges and opportunities to grow my career. I
                        am an open-source enthusiast who works with linux as my daily driver and I my motivation to work is to
                        make the world a place where technology ...
                    </div>

                    <div className="container shadow p-3 mb-5 bg-white rounded content-box-container-width">
                        <h5 className="content-box-header">PERSONAL DETAILS</h5>
                        <PersonalDetailItem jsonResource={require('./json/PersonalDetailItem.json')} />
                    </div>
                </div>
            </div>
        );
    }

}