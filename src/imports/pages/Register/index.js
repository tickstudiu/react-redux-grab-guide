import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col} from 'reactstrap';
import {RegisterText} from '../../Text';
import * as actions from '../../redux/actions';
import * as tools from '../../utils';
import RegisterForm from "../../components/forms/RegisterForm";
import NavLang from "../../components/navbars/NavLang";
import FooterPage from "../../components/footers/FooterPage";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            name: '',
            email: '',
            phone: '',

        }
    }

    componentWillReceiveProps(nextProps) {
        if (tools.isAuth()) {
            nextProps.history.push('/')
        }
    }

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]: value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.register(this.state);

    };

    handleChangeLanguage = (lang) => {
        this.props.changeLanguage(lang);
    }

    render() {
        const {handleChange, handleSubmit, handleChangeLanguage} = this;
        const lang = tools.getLanguage();
        const staticText = tools.checkLanguage(lang, RegisterText);

        return (
            <Container fluid>
                <Row>
                    <Col className="px-0">
                        <NavLang handleChangeLanguage={handleChangeLanguage} lang={lang}/>
                    </Col>
                </Row>

                <Row>
                    <Col md={{size: 4, offset: 4}} className="border rounded my-2">
                        <RegisterForm handleSubmit={handleSubmit} handleChange={handleChange}
                                      staticText={staticText}/>
                    </Col>
                </Row>

                <Row>
                    <Col className="px-0">
                        <FooterPage staticText={staticText}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = ({lang, user}) => {
    return {
        lang,
        user
    }
}

export default connect(mapStateToProps, actions)(Register);