import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Container, Row, Col} from 'reactstrap';
import {CustomerText, LoginText} from '../../Text';
import * as tools from '../../utils/';
import * as actions from '../../redux/actions';
import ListProfileDashBoard from "../../components/lists/ListProfileDashBoard";
import NavDashBoard from "../../components/navbars/NavDashBoard";
import NavbarDashBoard from "../../components/navbars/NavbarDashBoard";
import CustomerForm from "../../components/forms/CustomerForm";

class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillReceiveProps(nextProps) {
        if (tools.isAuth()) {
            nextProps.history.push('/')
        }
    }

    render() {
        const lang = tools.getLanguage();
        const staticText = tools.checkLanguage(lang, LoginText);

        return (
            <Container fluid>
                <Row>
                    <Col className="p-0 ">
                        <NavbarDashBoard staticText={staticText}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} className="px-lg-0">
                        <ListProfileDashBoard name="Wanchalmer Suksawat" image="https://d1jiktx90t87hr.cloudfront.net/223/wp-content/uploads/2016/09/michelle-prince-profile-img.png"/>
                        <NavDashBoard/>
                    </Col>
                    <Col md={9} className="px-lg-0">
                        <div className="p-lg-3">
                            <CustomerForm/>
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

export default connect(mapStateToProps, actions)(Customer);