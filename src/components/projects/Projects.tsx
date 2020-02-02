import React from 'react';
import TitleBox from '../shared/TitleBox/TitleBox';
import ProjectItems from './ProjectItem';

export default class Projects extends React.Component {
    render() {
        return (
            <div id="projects" className="row section-top-padding">
                <TitleBox title="Projects" fontAwesomeIcon="fa fa-laptop fa-5x" />
                <div className="col-md-10">
                    <div className="container shadow p-3 mb-5 bg-white rounded content-box-container-width">
                        <h5 className="content-box-header">GITHUB PROJECTS</h5>
                        <ProjectItems />
                    </div>
                </div>
            </div>
        );
    }
}