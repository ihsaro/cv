import React from 'react';
import { IEducationProps } from './interfaces/IEducationCardProps';

import './EducationCard.css';

export default class EducationCard extends React.Component<IEducationProps> {
    render() {
        return (
            <div className="row">
            {
                this.props.resource.EducationCardItems.map((item: any, index: number) => {
                    return (
                        <div className="col-sm-6">
                            <div className="card education-card">
                                <img className="education-card-photo" src={require('./images/' + item.image)} alt="..."/>
                                <div className="card-body">
                                    <div className="text-center">
                                        <strong className="text-center card-title line-breaker education-card-title">{item.title}</strong>
                                    </div>
                                    <label className="education-card-location line-breaker"><strong>Location:</strong> {item.location}</label>
                                    <label className="education-card-year line-breaker"><strong>Year:</strong> {item.year}</label>
                                    <table className="maximize-width">
                                        <tr>
                                            <th className="education-card-subject-title">Subject</th>
                                            <th className="education-card-result-title">Result</th>
                                        </tr>
                                    {
                                        item.results.map((result: any) => {
                                            return (
                                                <tr>
                                                    <td className="education-card-subject">{result.subject}</td>
                                                    <td className="education-card-result"><u>{result.result}</u></td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </table>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        );
    }
}