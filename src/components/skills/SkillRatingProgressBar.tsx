import React from 'react';
import { ISkillRatingProgressBar } from './interfaces/ISkillRatingProgressBar';

import './SkillRatingProgressBar.css';

export default class SkillRatingProgressBar extends React.Component<ISkillRatingProgressBar> {
    render() {
        return (
            <div className="row">
            {
                this.props.resource.SkillRatingProgressBarItems.map((item: any, index: number) => {

                    var progressBarStyle = {
                        width: item.rating + '%',
                        backgroundColor: item.color
                    }

                    return (
                        <div className="col-md-6 progress-bottom-margin">
                            <div>
                                <strong>{item.title}</strong>
                                <label className="text-right-float">{item.rating}%</label>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={item.rating} style={progressBarStyle}></div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}