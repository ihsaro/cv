import React from 'react';

import './TitleBox.css';

import { ITitleBoxProps } from './interfaces/ITitleBoxProps';

export default class TitleBox extends React.Component<ITitleBoxProps> {
    
    constructor(props: any) {
        super(props);
    }
    
    render() {
        return (
            <div className="col-md-2 text-center title-box-bg-color">
                <i className={`break-line fa-icon-color ${this.props.fontAwesomeIcon}`}></i>
                <strong className="title-box-font">{this.props.title}</strong>
            </div>
        );
    }
}