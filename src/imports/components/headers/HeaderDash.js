import React, { Component } from 'react';

class HeaderDash extends Component {

    render() {
        const { header, from } = this.props;

        return(
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h1 className="display-3">{header}</h1>
                    <p className="lead"><i className="fas fa-map-marker-alt mr-2"></i>{from}<span className="text-info">{' '}Preview the post</span></p>
                </div>
                <h1 className="display-3"><i className="far fa-bookmark"></i></h1>
            </div>
        );
    }
}

export default HeaderDash;