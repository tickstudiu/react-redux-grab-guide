import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col} from 'reactstrap';
import {FormText} from '../../../../Text/index';
import * as tools from '../../../../utils/index';
import * as actions from '../../../../redux/actions/index';
import ListProfileDashBoard from "../../../../components/lists/ListProfileDashBoard";
import NavDashBoard from "../../../../components/navbars/NavDashBoard";
import NavbarDashBoard from "../../../../components/navbars/NavbarDashBoard";
import ProfileForm from "../../../../components/forms/ProfileForm";


class Dash extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillReceiveProps(nextProps) {
        if (tools.isAuth()) {
            nextProps.history.push('/')
        }
    }

    handleChangeLanguage = (lang) => {
        this.props.changeLanguage(lang);
    }

    render() {
        const {handleChangeLanguage} = this;
        const lang = tools.getLanguage();
        const staticText = tools.checkLanguage(lang, FormText);

        return (
            <Container fluid>
                <Row>
                    <Col className="p-0 ">
                        <NavbarDashBoard staticText={staticText} handleChangeLanguage={handleChangeLanguage}
                                         lang={lang}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} className="px-lg-0">
                        <ListProfileDashBoard staticText={staticText} name="Wanchalmer Suksawat"
                                              image="https://d1jiktx90t87hr.cloudfront.net/223/wp-content/uploads/2016/09/michelle-prince-profile-img.png"/>
                        <NavDashBoard staticText={staticText}/>
                    </Col>
                    <Col md={9} className="px-lg-0">
                        <div className="p-lg-3">
                            <Row>
                                <Col md={{size: 8, offset: 2}}>
                                    <ProfileForm staticText={staticText.ProfileText}/>
                                </Col>
                            </Row>
                        </div>
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

export default connect(mapStateToProps, actions)(Dash);