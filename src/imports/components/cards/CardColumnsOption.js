import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardColumns} from 'reactstrap';
class CardColumnsOption extends Component {

    render() {
        const { piece, amount, program } = this.props;

        return(
            <CardColumns>
                <Card body className="mr-3">
                    <CardTitle className="small">Piece</CardTitle>
                    <CardText className="d-flex justify-content-start align-items-center">
                        <h1 className="display-4 mr-2"> {piece}$</h1>
                        <span className="small text-info"><i className="fas fa-arrow-down"></i>{' '}30%</span>
                    </CardText>
                </Card>
                <Card body inverse color="dark" className="mr-3">
                    <CardTitle className="small">Amount</CardTitle>
                    <CardText className="d-flex justify-content-start align-items-center">
                        <h1 className="display-4 mr-2"> {amount}</h1>
                        <span className="small"><i className="fas fa-user"></i></span>
                    </CardText>
                </Card>
                <Card body inverse color="primary">
                    <CardTitle className="small">Program</CardTitle>
                    <CardText className="d-flex justify-content-start align-items-center">
                        <h1 className="display-4 mr-2"> {program}</h1>
                        <span className="small"><i className="fas fa-flag"></i></span>
                    </CardText>
                </Card>
            </CardColumns>
        );
    }
}

export default CardColumnsOption;