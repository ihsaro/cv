import React from 'react'
import './NavigationBar.css'
import INavigationBarProps from './INavigationBarProps';
import INavigationBarState from './INavigationBarState';

export default class NavigationBar extends React.Component<INavigationBarProps, INavigationBarState> {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <nav id="nav-bar" className="navbar navbar-expand-md fixed-top bg-light navbar-light">
                <a id="brand" className="navbar-brand" href="#">Idjaz Hossanee</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        {(() => {
                            let navBarItems: any[] = [];

                            for (let i = 0; i < this.props.lstLabels.length; i++) {
                                navBarItems.push(
                                    <li className="nav-item nav-item-hover-background-change-light">
                                        <a className="nav-link" href={this.props.lstHref[i]}><i className={this.props.lstFontAwesomeIcons[i]}></i>{this.props.lstLabels[i]}</a>
                                    </li>
                                );
                            }
                            return navBarItems;
                        })()}
                    </ul>
                </div>
            </nav>
        );
    }
}