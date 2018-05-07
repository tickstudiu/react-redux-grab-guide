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
        const { welcome } = this.props.staticText;
        return(
            <ListGroup>
                <ListGroupItem className="border-0 d-flex rounded-0 mt-3">
                    <img
                        src={image}
                        style={{height: "50px", width: "50px"}}
                        className="rounded-circle mr-3 my-1"/>
                    <div>
                        <ListGroupItemHeading className="text-muted small">{welcome}.</ListGroupItemHeading>
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