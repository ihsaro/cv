import React from 'react';
import './PersonalDetailItem.css';
import { IPersonalDetailItemProps } from './interfaces/IPersonalDetailItemProps';

export default class PersonalDetailItem extends React.Component<IPersonalDetailItemProps> {
    render() {
        return (
            this.props.resource.PersonalDetailItems.map((item: any) => {
                if (item.has_navigable_icons === "false") {
                    return(
                        <div className="personal-detail-item-row row">
                            <div className="col-md-2 personal-detail-item-title"><strong>{item.title}</strong></div>
                            <div className="col-md-10 personal-detail-item-content">{item.content}</div>
                        </div>
                    )
                }
                else {
                    return(
                        <div className="personal-detail-item-row row">
                            <div className="col-md-2 personal-detail-item-title"><strong>{item.title}</strong></div>
                            {
                                item.navigable_icons.map((icon: any) => {
                                    return (
                                        <div className="col-md-1 col-sm-3 col-xs-3 personal-detail-item-navigable_icon">
                                            <a href={icon.url} className="icon-url" target="_blank">
                                                <div className="url-div">
                                                    <i className={`${icon.icon} social-media-icon`}></i>
                                                </div>
                                            </a>
                                        </div>
                                    )}
                                )
                            }
                        </div>
                    )
                }
            })
        );
    }
}