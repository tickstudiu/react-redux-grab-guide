import React, { Component } from 'react';
import {ButtonToolbar, ButtonGroup, Button} from 'reactstrap';

class ToolbarPage extends Component {

    render() {

        return(
            <div className="text-center">
                <p className="small text-muted p-0 m-0">2 of 3 page</p>
                <ButtonToolbar className="d-flex justify-content-center">
                    <ButtonGroup>
                        <Button>1</Button>
                        <Button disabled>2</Button>
                        <Button>3</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
        );
    }
}

export default ToolbarPage;