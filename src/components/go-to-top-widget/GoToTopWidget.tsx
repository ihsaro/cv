import React from 'react';

import './GoToTopWidget.css';

export default class GoToTopWidget extends React.Component {

    private scrollAnimation: any;

    constructor(props: any) {
        super(props);

        this.goToTop = this.goToTop.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.toggleGoToTopWidget);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.toggleGoToTopWidget);
    }

    render() {
        return (
            <div id="divArrowGoToTop" onClick={this.goToTop}>
                <i className="fa fa-arrow-up"></i>
                <label>Go to top</label>
            </div>
        );
    }

    private toggleGoToTopWidget(): void {
        if (document.documentElement.scrollTop === 0) {
            $("#divArrowGoToTop").fadeOut(500);
        }
        else {
            $("#divArrowGoToTop").fadeIn(500);
        }
    }

    private goToTop(): void {
        var position = document.body.scrollTop || document.documentElement.scrollTop;
        if (position) {
            window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
            this.scrollAnimation = setTimeout(this.goToTop, 15);
        } else clearTimeout(this.scrollAnimation);
    }
}