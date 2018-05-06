import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col} from 'reactstrap';
import {LoginText} from '../../Text';
import * as tools from '../../utils/';
import * as actions from '../../redux/actions';
import FooterPage from "../../components/footers/FooterPage";
import LoginForm from "../../components/forms/LoginForm";
import NavLang from "../../components/navbars/NavLang";
import CarouselLogin from "../../components/carousels/CarouselLogin";

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    componentWillReceiveProps(nextProps) {
        if (tools.isAuth()) {
            nextProps.history.push('/')
        }
    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    }

    handleChangeLanguage = (lang) => {
        this.props.changeLanguage(lang);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.Login(this.state);
    }

    render() {
        const {username, password} = this.state;
        const {handleChange, handleChangeLanguage, handleSubmit} = this;
        const lang = tools.getLanguage();
        const staticText = tools.checkLanguage(lang, LoginText);

        return (
            <Container fluid>
                <Row>
                    <Col className="px-0 p-md-0 m-md-0">
                        <NavLang handleChangeLanguage={handleChangeLanguage} lang={lang}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 0}} className="d-none d-md-block px-0">
                        <CarouselLogin/>
                    </Col>
                    <Col md={{size: 4, offset: 0}}>
                        <LoginForm staticText={staticText} handleChange={handleChange}
                                   username={username} password={password} HaveMember RememberMe
                                   handleSubmit={handleSubmit}/>

                    </Col>
                </Row>
                <Row>
                    <Col className="px-0">
                        <FooterPage staticText={staticText}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps({lang, user}) {
    return {
        lang,
        user
    };
}

export default connect(mapStateToProps, actions)(Login)