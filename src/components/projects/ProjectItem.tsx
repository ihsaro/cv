import React from 'react';
import { IProjectItemProps } from './interfaces/IProjectItemProps';
import { IProjectItemState } from './interfaces/IProjectItemState';

import './ProjectItem.css';

export default class ProjectItem extends React.Component<IProjectItemProps, IProjectItemState> {
    constructor(props: any) {
        super(props);
        this.state = { repos: [], loading: true };
    }

    componentDidMount() {
        this.populateReposData();
    }

    renderReposCarousel(repos: any) {
        return (
            <div className="card-deck row">
            {
                repos.map((item: any, index: number) => {
                    return (
                        <div className="col-md-4 card-bottom-margin no-padding">
                            <div className="card fixed-height">
                                <img className="card-img-top" src={require('./images/image-not-available.jpg')} alt="Card image cap" />
                                <div className="card-body">
                                    <strong className="card-title item-name">{item.name}</strong>
                                    <br/>
                                    <br/>
                                    <p className="card-text item-description">{item.description}</p>
                                </div>
                                <div className="card-footer">
                                    <a className="item-url" href={item.html_url} target="_blank"><button className="btn btn-primary">LINK TO PROJECT</button></a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderReposCarousel(this.state.repos);

        return (
            <div>
                {contents}
            </div>
        );
    }

    async populateReposData() {
        const response = await fetch('https://api.github.com/users/ihsaro/repos');
        const data = await response.json();
        this.setState({ repos: data, loading: false });
    }
}
