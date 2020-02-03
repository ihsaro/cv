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
            <div id="project-carousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {
                        repos.map((item: any, index: number) => {
                            return (
                                <li data-target="#project-carousel" data-slide-to={index} className={index == 0? "active": ""}></li>
                            )
                        })
                    }
                </ol>
                <div className="carousel-inner">
                    {
                        repos.map((item: any, index: number) => {
                            return (
                                <div className={index == 0? "carousel-item active": "carousel-item"}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img className="carousel-image" src={require('./images/' + 'guess-the-number-react' + '.png')} alt="First slide" />
                                        </div>
                                        <div className="col-md-6">
                                            <h5 style={{color: 'black'}}>{item.name}</h5>
                                            <p>{item.description}</p>
                                            <p><a href={item.html_url} target="_blank">Link to Project</a></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <a className="carousel-control-prev" href="#project-carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#project-carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
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
