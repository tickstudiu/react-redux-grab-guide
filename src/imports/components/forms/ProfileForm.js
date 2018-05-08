import React, {Component} from 'react';
import {Form, Col, FormGroup, Input, Button, Label} from 'reactstrap';

class ProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { customerId,address,tel,contact,date,route,type } = this.props.staticText;

        return (
            <Form>
                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>{customerId}</Label>
                    <Col sm={10}>
                        <Input type="text" name="name" placeholder="Name"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleText" sm={2}>{address}</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="text" id="exampleText"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePhone" sm={2}>{tel}</Label>
                    <Col sm={10}>
                        <Input type="text" name="phone" placeholder="Phone"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleContact" sm={2}>{contact}</Label>
                    <Col sm={10}>
                        <Input type="text" name="contact" placeholder="Contact person"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleDate" sm={2}>{date}</Label>
                    <Col sm={10}>
                        <Input type="date" name="date" id="exampleDate" placeholder="date placeholder"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleSelect" sm={2}>{route}</Label>
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
                    <Label for="exampleSelect" sm={2}>{type}</Label>
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

export default ProfileForm;