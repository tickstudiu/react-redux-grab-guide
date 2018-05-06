import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col} from 'reactstrap';
import {NoMatchText} from '../../Text';
import * as tools from '../../utils/';
import * as actions from '../../redux/actions';
import { Button } from 'reactstrap';
import NavLang from "../../components/navbars/NavLang";
class NoMatch extends Component{
    state = {
    };

    componentWillReceiveProps(nextProps) {
        if (tools.isAuth()) {
            nextProps.history.push('/')
        }
    }

    handleChangeLanguage = (lang) => {
        this.props.changeLanguage(lang);
    }

    render(){
        const {handleChangeLanguage} = this;
        const lang = tools.getLanguage();
        const staticText = tools.checkLanguage(lang, NoMatchText);

        return (
            <div>
                <Container>
                    <Row>
                        <Col className="px-0 p-md-0 m-md-0">
                            <NavLang handleChangeLanguage={handleChangeLanguage} lang={lang}/>
                        </Col>
                    </Row>
                    <Row className="my-lg-4">
                        <Col className="text-center">
                            <h1 className="display-1"><i className="far fa-frown"></i></h1>
                            <h1 className="display-4 p-0 m-0">{staticText.WeCant}</h1>
                            <p className="lead text-muted">{staticText.Sorry}</p>
                            <Button outline color="dark">Home page</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


function mapStateToProps({lang, user}) {
    return {
        lang,
        user
    };
}

export default connect(mapStateToProps, actions)(NoMatch)