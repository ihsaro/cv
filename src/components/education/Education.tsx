import React from 'react';
import TitleBox from '../shared/TitleBox/TitleBox';
import EducationCard from './EducationCard';

import userGraduate from './images/user-graduate.png';
import notAvailable from './images/not-available.png';

export default class Education extends React.Component {
    render() {
        return (
            <div id="education" className="row section-top-padding">
                <TitleBox title="Education" fontAwesomeIcon="fa fa-university fa-5x" />
                <div className="col-md-10">
                    <div className="container shadow p-3 mb-5 bg-white rounded content-box-container-width">
                        <h5 className="content-box-header">MAIN PATH</h5>
                        <EducationCard cardPictures={[userGraduate, notAvailable, notAvailable]} resource={require('./json/EducationCardItem.json')} />
                    </div>
                </div>
            </div>
        );
    }
}