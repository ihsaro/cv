import React from 'react';
import ExperienceItem from './ExperienceItem';

interface Props {}

interface State {}

export default class Experience extends React.Component<Props, State> {
    
    constructor(props: any) {
        super(props);
    }
    
    render() {
        return (
            <div id="work-experience" className="row section-top-padding">
                <div className="col-md-12">
                    <div className="container icon-container">
                        <i className="fa fa-briefcase"><u className="section-title">Work Experience</u></i>
                    </div>
                    <div className="container p-3 content-box-container-width">
                        <h5 className="content-box-header">ROADMAP</h5>
                        <ExperienceItem resource={require('./json/ExperienceItem.json')} />
                    </div>
                </div>
            </div>
        );
    }
}