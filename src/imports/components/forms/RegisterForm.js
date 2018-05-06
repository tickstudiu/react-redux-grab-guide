import React, {Component} from 'react';
import {Form, FormGroup, Input, Button} from 'reactstrap';

class RegisterForm extends Component {
    render() {

        const {handleChange} = this.props;
        const {header, submit} = this.props.staticText;

        return (
            <Form onSubmit={this.props.handleSubmit}>
                <h2 className="text-center my-4 text-uppercase">{header}</h2>
                <FormGroup>
                    <Input type="text" name="username" onChange={handleChange} placeholder="Username"
                           className="mb-3 rounded-0 "/>
                    <Input type="password" name="password" onChange={handleChange} placeholder="Password"
                           className="mb-3 rounded-0 "/>
                    <Input type="text" name="name" onChange={handleChange} placeholder="Name"
                           className="mb-3 rounded-0 "/>
                    <Input type="email" name="email" onChange={handleChange} placeholder="Email"
                           className="mb-3 rounded-0"/>
                    <Input type="text" name="phone" onChange={handleChange} placeholder="Phone"
                           className="mb-3 rounded-0"/>
                </FormGroup>
                <Button type="submit" className="btn btn-dark mb-3 w-100 rounded-0">{submit}</Button>
            </Form>
        );
    }
}

export default RegisterForm;