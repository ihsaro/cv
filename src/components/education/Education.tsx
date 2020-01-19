import React from 'react';
import TitleBox from '../shared/TitleBox/TitleBox';
import EducationCard from './EducationCard';

export default class Education extends React.Component {
    render() {
        return (
            <div id="education" className="row section-top-padding">
                <TitleBox title="Education" fontAwesomeIcon="fa fa-university fa-5x" />
                <div className="col-md-10">
                    <div className="container shadow p-3 mb-5 bg-white rounded content-box-container-width">
                        <h5 className="content-box-header">MAIN PATH</h5>
                        <EducationCard jsonResource={require('./json/EducationCardItem.json')} />
                    </div>
                </div>
            </div>
        );
    }
}