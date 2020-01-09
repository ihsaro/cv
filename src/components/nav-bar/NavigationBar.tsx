import React from 'react'
import './NavigationBar.css'
import INavigationBarProps from './INavigationBarProps';
import INavigationBarState from './INavigationBarState';

export default class NavigationBar extends React.Component<INavigationBarProps, INavigationBarState> {

    public constructor(props: any) {
        super(props);
    }

    public render() {

        const items =  this.props.jsonResource.NavigationBarItems.map((item: any) => {
            return <li key={item.Name} className="nav-item nav-item-hover-background-change-light">
                <a className="nav-link" href={item.Link}><i className={`${item.FontAwesomeIcon} nav-bar-icon-right-padding`}></i>{item.Name}</a>
            </li>
        })

        return (
            <nav id="nav-bar" className="navbar navbar-expand-md fixed-top bg-light navbar-light">
            <a id="brand" className="navbar-brand" href="#">{this.props.jsonResource.NavigationBarBrand}</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        {items}
                    </ul>
                </div>
            </nav>
        );
    }
}