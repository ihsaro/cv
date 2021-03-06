import React from 'react'
import './NavigationBar.css'
import INavigationBarProps from './interfaces/INavigationBarProps';
import INavigationBarState from './interfaces/INavigationBarState';

export default class NavigationBar extends React.Component<INavigationBarProps, INavigationBarState> {

    private togglerClicked: boolean;

    constructor(props: any) {
        super(props);
        this.togglerClicked = false;
        
        this.changeNavigationBarColorOnSmallDevicesButtonClick = this.changeNavigationBarColorOnSmallDevicesButtonClick.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.adaptNavigationBar);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.adaptNavigationBar);
    }

    render() {
        return (
            <nav id="nav-bar" className="navbar navbar-expand-md fixed-top nav-bar-light-bg navbar-light">
                <a id="brand" className="navbar-brand" href="#">{this.props.resource.NavigationBarBrand}</a>

                <button onClick={this.changeNavigationBarColorOnSmallDevicesButtonClick} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul id="nav-items" className="navbar-nav">
                        {this.props.resource.NavigationBarItems.map((item: any) => {
                            return <li key={item.Name} className="nav-item nav-item-hover-background-change-light">
                                <a className="nav-link" href={item.Link}><i className={`${item.FontAwesomeIcon} nav-bar-icon-right-padding`}></i>{item.Name}</a>
                            </li>
                        })}
                    </ul>
                </div>
            </nav>
        );
    }

    // TO REFACTOR
    private adaptNavigationBar(): void {
        let navigationBar = document.getElementById('nav-bar');
        let navigationBarItems = document.getElementsByClassName('nav-item');

        if (navigationBar == null)
            return;

        
        if (document.documentElement.scrollTop === 0 && !this.togglerClicked) {
            navigationBar.classList.remove('nav-bar-dark-bg');
            navigationBar.classList.remove('navbar-dark');
            navigationBar.classList.add('nav-bar-light-bg');
            navigationBar.classList.add('navbar-light');
            for (let i = 0; i < navigationBarItems.length; i++) {
                navigationBarItems[i].classList.remove('nav-item-hover-background-change-dark');
                navigationBarItems[i].classList.add('nav-item-hover-background-change-light');
            }
        }
        else {
            navigationBar.classList.remove('nav-bar-light-bg');
            navigationBar.classList.remove('navbar-light');
            navigationBar.classList.add('nav-bar-dark-bg');
            navigationBar.classList.add('navbar-dark');
            for (let i = 0; i < navigationBarItems.length; i++) {
                navigationBarItems[i].classList.remove('nav-item-hover-background-change-light');
                navigationBarItems[i].classList.add('nav-item-hover-background-change-dark');
            }
        }
    }

    private changeNavigationBarColorOnSmallDevicesButtonClick(): void {
        let navigationBar = document.getElementById('nav-bar');
        let navigationBarItems = document.getElementsByClassName('nav-item');

        this.togglerClicked = !this.togglerClicked;

        if(document.documentElement.scrollTop !== 0) {
            this.adaptNavigationBarToDarkBackground(navigationBar, navigationBarItems);
        }
        else {
            if(this.togglerClicked)
                this.adaptNavigationBarToDarkBackground(navigationBar, navigationBarItems);
            else
                this.adaptNavigationBarToLightBackground(navigationBar, navigationBarItems);
        }
    }

    private adaptNavigationBarToLightBackground(navigationBar: any, navigationBarItems: any): void {
        navigationBar.classList.remove('nav-bar-dark-bg');
        navigationBar.classList.remove('navbar-dark');
        navigationBar.classList.add('nav-bar-light-bg');
        navigationBar.classList.add('navbar-light');
        for (let i = 0; i < navigationBarItems.length; i++) {
            navigationBarItems[i].classList.remove('nav-item-hover-background-change-dark');
            navigationBarItems[i].classList.add('nav-item-hover-background-change-light');
        }
    }

    private adaptNavigationBarToDarkBackground(navigationBar: any, navigationBarItems: any): void {
        navigationBar.classList.remove('nav-bar-light-bg');
        navigationBar.classList.remove('navbar-light');
        navigationBar.classList.add('nav-bar-dark-bg');
        navigationBar.classList.add('navbar-dark');
        for (let i = 0; i < navigationBarItems.length; i++) {
            navigationBarItems[i].classList.remove('nav-item-hover-background-change-light');
            navigationBarItems[i].classList.add('nav-item-hover-background-change-dark');
        }
    }
}