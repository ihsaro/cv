import React from 'react';
import ProjectItems from './ProjectItem';

export default class Projects extends React.Component {
    render() {
        return (
            <div id="projects" className="row section-top-padding">
                <div className="col-md-12">
                    <div className="container icon-container">
                        <i className="fa fa-laptop"></i>
                    </div>
                    <div className="container shadow p-3 mb-5 bg-white rounded content-box-container-width">
                        <h5 className="content-box-header">GITHUB PROJECTS</h5>
                        <ProjectItems />
                    </div>
                </div>
            </div>
        );
    }
}