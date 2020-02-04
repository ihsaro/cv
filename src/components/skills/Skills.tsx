import React from 'react';
import SkillRatingProgressBar from './SkillRatingProgressBar';

export default class Skills extends React.Component {
    render() {
        return (
            <div id="skills" className="row section-top-padding">
                <div className="col-md-12">
                    <div className="container icon-container">
                        <i className="fa fa-tools"></i>
                    </div>
                    <div className="container shadow p-3 mb-5 bg-white rounded content-box-container-width">
                        <h5 className="content-box-header">SKILL RATING</h5>
                        <SkillRatingProgressBar resource={require('./json/SkillRatingProgressBarItem.json')}/>
                    </div>
                </div>
            </div>
        );
    }
}