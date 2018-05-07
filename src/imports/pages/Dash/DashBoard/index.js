import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col} from 'reactstrap';
import {DashText} from '../../../Text';
import * as tools from '../../../utils/';
import * as actions from '../../../redux/actions';
import ListProfileDashBoard from "../../../components/lists/ListProfileDashBoard";
import NavDashBoard from "../../../components/navbars/NavDashBoard";
import NavbarDashBoard from "../../../components/navbars/NavbarDashBoard";
import HeaderDash from "../../../components/headers/HeaderDash";
import CardColumnsOption from "../../../components/cards/CardColumnsOption";
import TextParagraph from "../../../components/texts/TextParagraph";
import TextComment from "../../../components/texts/TextComment";


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
        const staticText = tools.checkLanguage(lang, DashText);

        return (
            <Container fluid className="bg-light">
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
                            {
                                staticText.post.map((post, index) => {
                                    return(
                                      <div>
                                          <HeaderDash header={post.header} from={post.from} key={index}/>
                                          <CardColumnsOption piece={post.piece} program={post.program} amount={post.amount}/>
                                          {
                                              post.paragraph.map(paragraph => {
                                                  return(
                                                      <TextParagraph paragraph={paragraph}/>
                                                  )
                                              })
                                          }
                                          {
                                              post.commemt.map(commemt => {
                                                  return(
                                                      <TextComment header={commemt.header} text={commemt.text} by={commemt.by} date={commemt.date}/>
                                                  )
                                              })
                                          }
                                      </div>
                                    );
                                })
                            }
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