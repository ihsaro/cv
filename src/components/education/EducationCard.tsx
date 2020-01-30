import React from 'react';
import { IEducationProps } from './interfaces/IEducationCardProps';

import './EducationCard.css';

export default class EducationCard extends React.Component<IEducationProps> {
    render() {
        return (
            <div className="card-deck">
            {
                this.props.jsonResource.EducationCardItems.map((item: any, index: number) => {
                    return(
                        <div className="card education-card">
                            <img className="education-card-photo" src={this.props.cardPictures[index]} alt="..."/>
                            <div className="card-body">
                                <strong className="card-title line-breaker">{item.title}</strong>
                                <label className="line-breaker">Location: {item.location}</label>
                                <label>Year: {item.year}</label>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        );
    }
}