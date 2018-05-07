import React, { Component } from 'react';

class TextComment extends Component {

    render() {
        const { header, text, by, date } = this.props;

        return(
            <div className="pl-5 border-left border-secondary mb-4 bg-white pr-2">
                <h1 className="display-4">{header}</h1>
                <p className="lead text-muted">{text}</p>
                <div className="d-flex justify-content-between align-items-center ">
                    <p className="small">post by - {by}</p>
                    <p className="small text-muted">{date}</p>
                </div>
            </div>
        );
    }
}

export default TextComment;

