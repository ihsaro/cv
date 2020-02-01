import React from 'react';
import { IProjectsItem } from './interfaces/IProjectsItem';

export default class ProjectsItem extends React.Component<IProjectsItem> {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    
                </ol>
            </div>
        );
    }
}