import React, { Component } from 'react';
import { Button, ListGroup, ListGroupItem, Collapse } from 'reactstrap';

class NavDashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: false,
            forms: false
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

    render() {

        const {toggleForms, toggleHome} = this;
        const {home, forms} = this.state;

        return(
            <div>
                <h5 className="text-uppercase small pl-lg-2 my-2">GENERAL</h5>
                <Button color="primary" onClick={toggleHome} name="home"
                        className="rounded-0 w-100 text-left my-1"><i className="fas fa-home mr-3" style={{ width: "20px"}}></i>Home</Button>
                <Collapse isOpen={home}>
                    <ListGroup>
                        <ListGroupItem>Dashboard</ListGroupItem>
                        <ListGroupItem>Dashboard 2</ListGroupItem>
                        <ListGroupItem>Dashboard 3</ListGroupItem>
                    </ListGroup>
                </Collapse>

                <Button color="primary" onClick={toggleForms} name="forms"
                        className="rounded-0 w-100 text-left my-1"><i className="fas fa-book mr-3" style={{ width: "20px"}}></i>Forms</Button>
                <Collapse isOpen={forms}>
                    <ListGroup>
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Morbi leo risus</ListGroupItem>
                        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                </Collapse>
            </div>
        );
    }
}

export default NavDashBoard;