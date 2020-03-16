import React from 'react';

import './ExperienceItem.css';

interface Props {
    resource: any;
}

interface State {}

export default class ExperienceItem extends React.Component<Props, State> {
    render() {
        return (
            this.props.resource.ExperienceItem.map((item: any, index: number) => {
                return (
                    <div className="row experience-item-top-margin">
                        <div className="col-md-4">
                            <strong className="company-name">{item.company_name}</strong>
                            <br />
                            <label className="job-period">{item.period}</label>
                            <br />
                            <label className="job-role">{item.role}</label>
                        </div>
                        <div className="col-md-8">
                            <p className="job-description">{item.description}</p>
                        </div>
                    </div>
                )
            })
        );
    }
}