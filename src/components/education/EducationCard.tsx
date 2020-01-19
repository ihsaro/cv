import React from 'react';
import { IEducationProps } from './interfaces/IEducationCardProps';

import './EducationCard.css';

import profilePicture from '../introduction/images/profile_picture.jpg';

export default class EducationCard extends React.Component<IEducationProps> {
    render() {
        return (
            <div className="card-deck">
            {
                this.props.jsonResource.EducationCardItems.map((item: any) => {
                    return(
                        <div className="card education-card">
                            <img className="education-card-photo" src={profilePicture} alt="..."/>
                            <div className="card-body">
                                <p className="card-title">{item.title}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        );
    }
}