import React, {Component} from 'react';
import {Form, Col, FormGroup, Input, Button, Label} from 'reactstrap';
import { Icon } from 'antd';

class CustomerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Form>
                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Customer ID</Label>
                    <Col sm={10}>
                        <Input type="text" name="name" placeholder="Name"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleText" sm={2}>Address</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="text" id="exampleText"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePhone" sm={2}>Telephone</Label>
                    <Col sm={10}>
                        <Input type="text" name="phone" placeholder="Phone"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleContact" sm={2}>Contact</Label>
                    <Col sm={10}>
                        <Input type="text" name="contact" placeholder="Contact person"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleDate" sm={2}>Date</Label>
                    <Col sm={10}>
                        <Input type="date" name="date" id="exampleDate" placeholder="date placeholder"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleSelect" sm={2}>Route</Label>
                    <Col sm={10}>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleSelect" sm={2}>Type</Label>
                    <Col sm={10}>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                        </Input>
                    </Col>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}

export default CustomerForm;