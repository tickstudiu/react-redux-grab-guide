import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

class ListProfileDashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            image: this.props.image
        };
    }

    render() {

        const { name, image } = this.state;

        return(
            <ListGroup>
                <ListGroupItem className="border-0 d-flex">
                    <img
                        src={image}
                        style={{height: "50px", width: "50px"}}
                        className="rounded-circle mr-3 my-1"/>
                    <div>
                        <ListGroupItemHeading className="text-muted small">Welcome.</ListGroupItemHeading>
                        <ListGroupItemText>
                            {name}
                        </ListGroupItemText>
                    </div>
                </ListGroupItem>
            </ListGroup>
        );
    }
}

export default ListProfileDashBoard;