import React from 'react';
import './PersonalDetailItem.css';
import { IPersonalDetailItemProps } from './interfaces/IPersonalDetailItemProps';

export default class PersonalDetailItem extends React.Component<IPersonalDetailItemProps> {
    render() {
        return (
            this.props.resource.PersonalDetailItems.map((item: any) => {
                return(
                    <div className="row">
                        <div id="personal-detail-item-title" className="col-md-2"><strong>{item.title}</strong></div>
                        <div id="personal-detail-item-content" className="col-md-10">{item.content}</div>
                    </div>
                )
            })
        );
    }
}