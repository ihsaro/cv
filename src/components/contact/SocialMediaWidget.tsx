import React from 'react';
import { ISocialMediaWidgetProps } from './interfaces/ISocialMediaWidgetProps';

export default class SocialMediaWidget extends React.Component<ISocialMediaWidgetProps> {
    render() {
        return (
            this.props.resource.SocialMediaWidgetItems.map((item: any, index: number) => {
                return (
                    <div className="col-md-3">
                        <i className={item.icon}></i>
                    </div>
                )
            })
        );
    }
}