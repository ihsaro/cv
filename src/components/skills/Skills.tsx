import React from 'react';
import TitleBox from '../shared/TitleBox/TitleBox';
import SkillRatingProgressBar from './SkillRatingProgressBar';

export default class Skills extends React.Component {
    render() {
        return (
            <div id="skills" className="row section-top-padding">
                <TitleBox title="Skills" fontAwesomeIcon="fa fa-tools fa-5x" />
                <div className="col-md-10">
                    <div className="container shadow p-3 mb-5 bg-white rounded content-box-container-width">
                        <h5 className="content-box-header">SKILL RATING</h5>
                        <SkillRatingProgressBar jsonResource={require('./json/SkillRatingProgressBarItem.json')}/>
                    </div>
                </div>
            </div>
        );
    }
}