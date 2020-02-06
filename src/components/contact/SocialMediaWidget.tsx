import React from 'react';
import { ISocialMediaWidgetProps } from './interfaces/ISocialMediaWidgetProps';

import './SocialMediaWidget.css';

export default class SocialMediaWidget extends React.Component<ISocialMediaWidgetProps> {
    render() {
        return (
            this.props.resource.SocialMediaWidgetItems.map((item: any, index: number) => {
                return (
                    <div className="row">
                        <a href={item.url} className="icon-url" target="_blank">
                            <div className="url-div">
                                <i className={`${item.icon} social-media-icon`}></i>
                                <strong>{`${item.name}`}</strong>
                            </div>
                        </a>
                    </div>
                )
            })
        );
    }
}