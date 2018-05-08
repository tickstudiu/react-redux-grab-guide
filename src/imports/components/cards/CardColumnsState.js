import React, { Component } from 'react';
import {Row, Col, Card, CardTitle, CardText,
    CardBody, CardFooter} from 'reactstrap';

class CardColumnsState extends Component {

    render() {

        return(
            <Row>
                <Col lg={{size: 3, offset: 0}} md={{size: 6, offset: 0}} sm={{size: 12, offset: 0}}
                     className="mb-lg-0 my-2">
                    <Card body inverse color="dark" className="p-1">
                        <CardBody>
                            <CardTitle className="text-uppercase d-flex justify-content-between">
                                <p className="lead">new projects</p>
                                <i className="far fa-arrow-alt-circle-down"
                                   style={{opacity: '0.4'}}></i>
                            </CardTitle>
                            <CardText><h1>94</h1></CardText>
                        </CardBody>
                        <CardFooter className="bg-transparent text-uppercase border-white">13%
                            increase</CardFooter>
                    </Card>
                </Col>
                <Col lg={{size: 3, offset: 0}} md={{size: 6, offset: 0}} sm={{size: 12, offset: 0}}
                     className="mb-lg-0 my-2">
                    <Card body inverse color="success" className="p-1">
                        <CardBody>
                            <CardTitle className="text-uppercase d-flex justify-content-between">
                                <p className="lead">TEAM MEMBERS</p>
                                <i className="far fa-arrow-alt-circle-down"
                                   style={{opacity: '0.4'}}></i>
                            </CardTitle>
                            <CardText><h1>5,990</h1></CardText>
                        </CardBody>
                        <CardFooter className=" bg-transparent text-uppercase border-white">4%
                            increase</CardFooter>
                    </Card>
                </Col>
                <Col lg={{size: 3, offset: 0}} md={{size: 6, offset: 0}} sm={{size: 12, offset: 0}}
                     className="mb-lg-0 my-2">
                    <Card body inverse color="warning" className="p-1">
                        <CardBody>
                            <CardTitle className="text-uppercase d-flex justify-content-between">
                                <p className="lead">total budget</p>
                                <i className="far fa-arrow-alt-circle-up" style={{opacity: '0.4'}}></i>
                            </CardTitle>
                            <CardText><h1>$80,890</h1></CardText>
                        </CardBody>
                        <CardFooter className=" bg-transparent text-uppercase border-white">21%
                            increase</CardFooter>
                    </Card>
                </Col>
                <Col lg={{size: 3, offset: 0}} md={{size: 6, offset: 0}} sm={{size: 12, offset: 0}}
                     className="mb-lg-0 my-2">
                    <Card body inverse color="danger" className="p-1">
                        <CardBody>
                            <CardTitle className="text-uppercase d-flex justify-content-between">
                                <p className="lead">new customers</p>
                                <i className="far fa-arrow-alt-circle-up" style={{opacity: '0.4'}}></i>
                            </CardTitle>
                            <CardText><h1>3</h1></CardText>
                        </CardBody>
                        <CardFooter className=" bg-transparent text-uppercase border-white">13%
                            increase</CardFooter>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default CardColumnsState;