import React from 'react';
import { IPersonalDetailItemProps } from './interfaces/IPersonalDetailItemProps';

export default class PersonalDetailItem extends React.Component<IPersonalDetailItemProps> {
    render() {
        return (
            this.props.resource.PersonalDetailItems.map((item: any) => {
                return(
                    <div className="row">
                        <div className="col-md-2"><strong>{item.title}</strong></div>
                        <div className="col-md-10">{item.content}</div>
                    </div>
                )
            })
        );
    }
}