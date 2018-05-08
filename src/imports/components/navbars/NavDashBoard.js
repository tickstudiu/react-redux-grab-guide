import React, { Component } from 'react';
import { Button, ListGroup, ListGroupItem, Collapse } from 'reactstrap';

class NavDashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: false,
            forms: false,
            ui: false,
            table: false,
            data: false
        };
    }

    toggleHome = (event) => {
        let name = event.target.name;
        let status = this.state.home;
        this.setState({
            [name]: !status
        });
    };

    toggleForms = (event) => {
        let name = event.target.name;
        let status = this.state.forms;
        this.setState({
            [name]: !status
        });
    };

    toggleUI = (event) => {
        let name = event.target.name;
        let status = this.state.ui;
        this.setState({
            [name]: !status
        });
    };

    toggleTable = (event) => {
        let name = event.target.name;
        let status = this.state.table;
        this.setState({
            [name]: !status
        });
    };

    toggleData = (event) => {
        let name = event.target.name;
        let status = this.state.data;
        this.setState({
            [name]: !status
        });
    };

    render() {

        const {toggleForms, toggleHome, toggleUI, toggleTable, toggleData} = this;
        const {home, forms, ui, data, table} = this.state;
        const { general, homePage, formPage,  uiPage, tablePage,  dataPage } = this.props.staticText;

        return(
            <div>
                <h5 className="text-uppercase small pl-lg-2 my-2">{general}</h5>
                <Button color="primary" onClick={toggleHome} name="home"
                        className="rounded-0 w-100 text-left my-1"><i className="fas fa-home mr-3" style={{ width: "20px"}}></i>{homePage}</Button>
                <Collapse isOpen={home}>
                    <ListGroup>
                        <ListGroupItem tag="a" href="/dash">Dashboard</ListGroupItem>
                        <ListGroupItem tag="a" href="/dash/2">Dashboard 2</ListGroupItem>
                        <ListGroupItem tag="a" href="/dash/3">Dashboard 3</ListGroupItem>
                    </ListGroup>
                </Collapse>

                <Button color="primary" onClick={toggleForms} name="forms"
                        className="rounded-0 w-100 text-left my-1"><i className="fas fa-book mr-3" style={{ width: "20px"}}></i>{formPage}</Button>
                <Collapse isOpen={forms}>
                    <ListGroup>
                        <ListGroupItem tag="a" href="/dash/form/profile">Profile form</ListGroupItem>
                        <ListGroupItem tag="a" href="/dash/form/register">Register form</ListGroupItem>
                        <ListGroupItem tag="a" href="/dash/form/login">Login form</ListGroupItem>
                    </ListGroup>
                </Collapse>

                <Button color="primary" onClick={toggleUI} name="ui"
                        className="rounded-0 w-100 text-left my-1"><i className="fas fa-tv mr-3" style={{ width: "20px"}}></i>{uiPage}</Button>
                <Collapse isOpen={ui}>
                    <ListGroup>
                        <ListGroupItem tag="a" href="/dash/text">Texts</ListGroupItem>
                        <ListGroupItem tag="a" href="/dash/tootlbar">Tootlbars</ListGroupItem>
                        <ListGroupItem tag="a" href="/dash/header">Headers</ListGroupItem>
                    </ListGroup>
                </Collapse>

                <Button color="primary" onClick={toggleTable} name="table"
                        className="rounded-0 w-100 text-left my-1"><i className="fas fa-table mr-3" style={{ width: "20px"}}></i>{tablePage}</Button>
                <Collapse isOpen={table}>
                    <ListGroup>
                        <ListGroupItem tag="a" href="/dash/table/state">Table State</ListGroupItem>
                    </ListGroup>
                </Collapse>

                <Button color="primary" onClick={toggleData} name="data"
                        className="rounded-0 w-100 text-left my-1"><i className="fas fa-download mr-3" style={{ width: "20px"}}></i>{dataPage}</Button>
                <Collapse isOpen={data}>
                    <ListGroup>
                        <ListGroupItem tag="a" href="/dash/card">Card</ListGroupItem>
                    </ListGroup>
                </Collapse>
            </div>
        );
    }
}

export default NavDashBoard;