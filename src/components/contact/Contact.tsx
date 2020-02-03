import React from 'react';
import TitleBox from '../shared/TitleBox/TitleBox';
import SocialMediaWidget from './SocialMediaWidget';

import './Contact.css';

export default class Contact extends React.Component {
    render() {
        return (
            <div id="contact" className="row section-top-padding">
                <TitleBox title="Contact" fontAwesomeIcon="fa fa-phone fa-5x" />
                <div className="col-md-10">
                    <div className="container shadow p-3 mb-5 bg-white rounded content-box-container-width">
                        <h5 className="content-box-header">CONTACT</h5>
                        <div className="row">
                            <div className="col-md-12">
                                <form>
                                    <div className="form-group">
                                        <strong>Name</strong>
                                        <input className="form-control" type="text" placeholder="Enter your name" required></input>
                                    </div>
                                    <div className="form-group">
                                        <strong>Email</strong>
                                        <input className="form-control" type="Email" placeholder="Enter your email"></input>
                                    </div>
                                    <div className="form-group">
                                        <strong>Message</strong>
                                        <textarea className="form-control" rows={3} placeholder="Enter your message" required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary enlarge-button">Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <SocialMediaWidget resource={require('./json/SocialMediaWidget.json')} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}