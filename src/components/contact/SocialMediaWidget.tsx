import React from 'react';
import { ISocialMediaWidgetProps } from './interfaces/ISocialMediaWidgetProps';

import './SocialMediaWidget.css';

export default class SocialMediaWidget extends React.Component<ISocialMediaWidgetProps> {
    render() {
        return (
            this.props.resource.SocialMediaWidgetItems.map((item: any, index: number) => {
                return (
                    <a href={item.url} target="_blank"><i className={`${item.icon} social-media-icon`}></i></a>
                )
            })
        );
    }
}