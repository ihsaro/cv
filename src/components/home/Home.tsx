import React from 'react';

import PersonalDetailItem from './PersonalDetailItem';

export default class Home extends React.Component {
    render() {
        return (
            <div id="home" className="row justify-content-center section-top-padding">
                <div className="col-md-12">
                    <div className="container icon-container">
                        <i className="fa fa-home"></i>
                    </div>
                    <div className="container shadow p-3 mb-5 bg-white rounded content-box-container-width">
                        <h5 className="content-box-header">ABOUT ME</h5>
                        I am a professional software developer seeking out new challenges and opportunities to grow my career. I
                        am an open-source enthusiast who works with linux as my daily driver and I my motivation to work is to
                        make the world a place where technology ...
                    </div>

                    <div className="container shadow p-3 mb-5 bg-white rounded content-box-container-width">
                        <h5 className="content-box-header">PERSONAL DETAILS</h5>
                        <PersonalDetailItem resource={require('./json/PersonalDetailItem.json')} />
                    </div>
                </div>
            </div>
        );
    }

}