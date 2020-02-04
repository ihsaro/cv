import React from 'react';
import EducationCard from './EducationCard';

export default class Education extends React.Component {
    render() {
        return (
            <div id="education" className="row section-top-padding">
                <div className="col-md-12">
                    <div className="container icon-container">
                        <i className="fa fa-university"></i>
                    </div>
                    <div className="container shadow p-3 mb-5 bg-white rounded content-box-container-width">
                        <h5 className="content-box-header">MAIN PATH</h5>
                        <EducationCard resource={require('./json/EducationCardItem.json')} />
                    </div>
                </div>
            </div>
        );
    }
}