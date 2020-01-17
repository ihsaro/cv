import React from 'react';
import { IPersonalDetailItemProps } from './interfaces/IPersonalDetailItemProps';
import { IPersonalDetailItemState } from './interfaces/IPersonalDetailItemState';

import './PersonalDetailItem.css';

export default class PersonalDetailItem extends React.Component<IPersonalDetailItemProps, IPersonalDetailItemState> {
    render() {

        return this.props.jsonResource.PersonalDetailItems.map((item: any) => {
            return <div className="row">
                <div className="col-sm-4 personal-details-title">{item.title}</div>
                <div className="col-sm-8">{item.content}</div>
            </div>
        })
    }
}