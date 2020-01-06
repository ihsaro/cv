import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'popper.js';
import '@fortawesome/fontawesome-free/css/all.css'

import './NavigationBar.css'

export default class NavigationBar extends React.Component {
    public render() {
        return (
            <nav id="nav-bar" className="navbar navbar-expand-md fixed-top bg-light navbar-light">
            <a id="brand" className="navbar-brand" href="#">Idjaz Hossanee</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item nav-item-hover-background-change-light">
                        <a className="nav-link" href="#home"><i className="fa fa-home nav-bar-icon-right-padding"></i>Home</a>
                    </li>
                    <li className="nav-item nav-item-hover-background-change-light">
                        <a className="nav-link" href="#skills"><i
                                className="fa fa-tools nav-bar-icon-right-padding"></i>Skills</a>
                    </li>
                    <li className="nav-item nav-item-hover-background-change-light">
                        <a className="nav-link" href="#"><i
                                className="fa fa-university nav-bar-icon-right-padding"></i>Education</a>
                    </li>
                    <li className="nav-item nav-item-hover-background-change-light">
                        <a className="nav-link" href="#"><i className="fa fa-laptop nav-bar-icon-right-padding"></i>Projects</a>
                    </li>
                    <li className="nav-item nav-item-hover-background-change-light">
                        <a className="nav-link" href="#"><i className="fa fa-phone nav-bar-icon-right-padding"></i>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
        );
    }
}