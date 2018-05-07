import React, { Component } from 'react';

class TextParagraph extends Component {

    render() {
        const { paragraph } = this.props;

        return(
            <p className="lead text-muted p-4 bg-white rounded">{paragraph}</p>
        );
    }
}

export default TextParagraph;