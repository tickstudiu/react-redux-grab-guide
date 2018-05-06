import React, {Component} from 'react';
import {Form, FormGroup, Button, Label} from 'reactstrap';
import { Input, Icon } from 'antd';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NotHaveMember: this.props.HaveMember,
            RememberMe: this.props.RememberMe,
            issShowPassword: false,
        }
    }

    NotHaveMember() {
        const { signUp, menberYet } = this.props.staticText;

        if (this.state.NotHaveMember) {
            return (
                <div className="text-center mb-4">
                    <hr className="border-primary"/>
                    <p className="lead text-primary">{menberYet}</p>
                    <button className="btn btn-outline-primary rounded-0 w-100 "><span>{signUp}</span></button>
                </div>
            )
        }
    }

    RememberMe() {
        const { rememberMe } = this.props.staticText;

        if (this.state.RememberMe) {
            return (
                <FormGroup check className="pl-0">
                    <Label check>
                        <Input type="checkbox" />{' ' + rememberMe}
                    </Label>
                </FormGroup>
            )
        }
    }

    handlePressIcon = (event) => {
        event.preventDefault();
        this.setState({issShowPassword: !this.state.issShowPassword});
    };

    render() {
        const { handleChange, handleSubmit, username, password } = this.props;
        const { header, forgot, forgotClick, submit } = this.props.staticText;
        const { issShowPassword } = this.state;
        const { handlePressIcon } = this;

        return (
            <Form>
                <h1 className="display-4 text-center mt-4 text-primary">{header}</h1>
                <FormGroup>
                    <Input type="username"
                           size="large"
                           placeholder="username" name="username"
                           className="rounded-0 my-3"
                           value={username} onChange={handleChange}/>

                    <Input type={issShowPassword ? "text" : "password"}
                           size="large"
                           placeholder="password" name="password"
                           className="rounded-0"
                           addonAfter={<Icon onClick={handlePressIcon} type="eye"
                                             style={issShowPassword ? {color: 'rgba(0,0,0,1)', transition: 'all 0.5s'}:{color: 'rgba(0,0,0,0.4)', transition: 'all 0.5s'}} />}
                           value={password}
                           onChange={handleChange}/>
                </FormGroup>
                {this.RememberMe()}
                <Button className="btn btn-outline-primary mb-4 w-100 rounded-0"
                        onClick={handleSubmit}>{submit}</Button>
                <h5 className="lead text-primary small text-uppercase mb-4">{forgot} <a
                    href="#"
                    className="text-dark">{forgotClick}</a>
                </h5>
                {this.NotHaveMember()}
            </Form>
        );
    }
}

export default LoginForm;